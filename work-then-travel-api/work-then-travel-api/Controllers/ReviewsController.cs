using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;
using work_then_travel_api.Data;
using work_then_travel_api.Framework.Identity;
using work_then_travel_api.Models;
using work_then_travel_api.ModelView;

namespace work_then_travel_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ReviewsController : ControllerBase
    {
        private readonly WTGuideDbContext wtGuideDbContext;

        public ReviewsController(WTGuideDbContext dbContext)
        {
            wtGuideDbContext = dbContext;
        }

        [HttpGet]
        public async Task<Review[]> GetAllReviews()
        {
            return await wtGuideDbContext.Review.ToArrayAsync();
        }
        [HttpGet("{name}")]
        public async Task<ActionResult<Agency>> GetAllAgencyReviews(string name)
        {
            Agency agency = await wtGuideDbContext.Agency.FirstOrDefaultAsync(a => a.Name == name);

            if (agency == null)
            {
                return NotFound();
            }

            var reviews = await wtGuideDbContext.Review
        .Where(r => r.AgencyID == agency.ID)
        .Select(r => new ReviewView
        {
            ReviewID = r.ID,
            Rating = r.Rating,
            Reviews = r.Reviews,
            DateTime = r.DateTime,
            UserAvatar = r.UserAvatar,
            Username = r.Username,
        })
        .ToListAsync();

            return Ok(reviews);

        }

        [HttpGet("GetAgencyRatings/{name}")]
        public async Task<ActionResult<Agency>> GetAllAgencyRatings(string name)
        {
            Agency agency = await wtGuideDbContext.Agency.FirstOrDefaultAsync(a => a.Name == name);

            if (agency == null)
            {
                return NotFound();
            }

            var reviews = await wtGuideDbContext.Review
        .Where(r => r.AgencyID == agency.ID)
        .Select(r => new AgencyRatingsView
        {
            Rating = r.Rating,
        })
        .ToListAsync();

            return Ok(reviews);

        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task PostReview(ReviewInput reviewInput)
        {
            Identity identity = ControllerContext.GetIdentity();
            Profile userProfile = wtGuideDbContext.Profile.FirstOrDefault(p => p.ID == identity.ID);
            Agency agency = await wtGuideDbContext.Agency.FirstOrDefaultAsync(a => a.Name == reviewInput.AgencyName);


            var review = new Review
            {
                ID = Guid.NewGuid(),
                ProfiledID = identity.ID,
                Rating = reviewInput.Rating,
                Reviews = reviewInput.Reviews,
                DateTime = reviewInput.DateTime,
                UserAvatar = userProfile.Avatar,
                Username = userProfile.Name,
                AgencyID = agency.ID
            };

            wtGuideDbContext.Review.Add(review);
            await wtGuideDbContext.SaveChangesAsync();
        }

        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> DeleteReview(Guid id)
        {
            var review = await wtGuideDbContext.Review.FindAsync(id);
            wtGuideDbContext.Remove(review);
            await wtGuideDbContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Review>> EditReview(Guid id, ReviewEdit reviewEdit)
        {
            Identity identity = ControllerContext.GetIdentity();
            Profile userProfile = wtGuideDbContext.Profile.FirstOrDefault(p => p.ID == identity.ID);
            Agency agency = await wtGuideDbContext.Agency.FirstOrDefaultAsync(a => a.Name == reviewEdit.AgencyName);

            if (id != reviewEdit.ReviewID)
            {
                return BadRequest("ID in the path does not match the ID in the agency object.");
            }
            var review = new Review
            {
                ID = reviewEdit.ReviewID,
                ProfiledID = identity.ID,
                Rating = reviewEdit.Rating,
                Reviews = reviewEdit.Reviews,
                DateTime = reviewEdit.DateTime,
                UserAvatar = userProfile.Avatar,
                Username = userProfile.Name,
                AgencyID = agency.ID
            };

            wtGuideDbContext.Entry(review).State = EntityState.Modified;

            try
            {
                await wtGuideDbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReviewExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(review);
        }
        private bool ReviewExists(Guid id)
        {
            return (wtGuideDbContext.Review?.Any(e => e.ID == id)).GetValueOrDefault();
        }

    }
}
