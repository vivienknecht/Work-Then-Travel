using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using work_then_travel_api.Data;
using work_then_travel_api.Framework.Identity;
using work_then_travel_api.Models;
using work_then_travel_api.ModelView;

namespace work_then_travel_api.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly WTGuideDbContext wtGuideDbContext;

        public ProfileController(WTGuideDbContext dbContext)
        {
            wtGuideDbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetProfile()
        {
            Identity identity = ControllerContext.GetIdentity();

            Profile userProfile = wtGuideDbContext.Profile.FirstOrDefault(p => p.ID == identity.ID);

            var profile = new UserProfile
            {
                Name = userProfile.Name,
                Avatar = userProfile.Avatar,
                Email = userProfile.Email,
                IsAdmin = userProfile.IsAdmin,

            };
            //var profile = await wtGuideDbContext.Profile.FindAsync(identity.ID);

            return Ok(profile);
        }

        [HttpPut("EditProfile")]
        public async Task<IActionResult> PutProfile(UserProfile userProfile)
        {
            Identity identity = ControllerContext.GetIdentity();

            Guid profileID = identity.ID;

            Profile user = wtGuideDbContext.Profile.FirstOrDefault(p => p.ID == profileID);

            user.Avatar = userProfile.Avatar;
            user.Name = userProfile.Name;
            user.IsAdmin = userProfile.IsAdmin;

            try
            {
                await wtGuideDbContext.SaveChangesAsync();
                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfileExists(profileID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }

        [HttpPost]
        public async Task<ActionResult<Profile>> PostProfile(Profile profile)
        {
            if (wtGuideDbContext.Profile == null)
            {
                return Problem("Entity set 'ProfileContext.Profile'  is null.");
            }

            wtGuideDbContext.Profile.Add(profile);

            await wtGuideDbContext.SaveChangesAsync();

            return CreatedAtAction("GetProfile", new { id = profile.ID }, profile);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfile(Guid id)
        {
            var profile = await wtGuideDbContext.Profile.FindAsync(id);

            if (profile == null)
            {
                return NotFound();
            }

            wtGuideDbContext.Profile.Remove(profile);

            await wtGuideDbContext.SaveChangesAsync();

            return NoContent();
        }

        private bool ProfileExists(Guid id)
        {
            return (wtGuideDbContext.Profile?.Any(e => e.ID == id)).GetValueOrDefault();
        }

    }
}
