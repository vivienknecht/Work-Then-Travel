using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using work_then_travel_api.Data;
using work_then_travel_api.Models;
using work_then_travel_api.ModelView;

namespace work_then_travel_api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class AgencyController : ControllerBase
    {
        private readonly WTGuideDbContext wtGuideDbContext;

        public AgencyController(WTGuideDbContext dbContext)
        {
            wtGuideDbContext = dbContext;
        }

        [HttpGet]
        public async Task<Agency[]> GetALLAgencies()
        {
            return await wtGuideDbContext.Agency.ToArrayAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Agency>> GetAgency(Guid id)
        {
            var agency = await wtGuideDbContext.Agency.FindAsync(id);

            if (agency == null)
            {
                return NotFound();
            }

            return agency;
        }

        [HttpGet("{name}")]
        public async Task<ActionResult<Agency>> GetAgencyByName(string name)
        {
            var agency = await wtGuideDbContext.Agency.FirstOrDefaultAsync(a => a.Name == name);

            if (agency == null)
            {
                return NotFound();
            }

            return agency;
        }

        [HttpPost]
        public async Task<ActionResult<Agency>> PostAgency(Agency agency)
        {
            if (wtGuideDbContext.Agency == null)
            {
                return Problem("Entity set 'AgencyContect.Agency' is nul.");
            }
            agency.ID = Guid.NewGuid();
            wtGuideDbContext.Agency.Add(agency);
            await wtGuideDbContext.SaveChangesAsync();
            return CreatedAtAction("GetAgency", new { id = agency.ID }, agency);
        }

        /*   [HttpPut("{id}")]
           public async Task<IActionResult> PutAgency(Guid id, Agency agency)
           {
               wtGuideDbContext.Entry(agency).State = EntityState.Modified;
               try
               {
                   await wtGuideDbContext.SaveChangesAsync();
               }
               catch(DbUpdateConcurrencyException)
               {
                   if (!AgencyExists(id))
                   {
                       return NotFound();
                   }
                   else
                   {
                       throw;
                   }
               }
               return NoContent();
           } */
        [HttpPut("{id}")]
        public async Task<ActionResult<Agency>> PutAgency(Guid id, Agency agency)
        {
            if (id != agency.ID)
            {
                return BadRequest("ID in the path does not match the ID in the agency object.");
            }

            wtGuideDbContext.Entry(agency).State = EntityState.Modified;

            try
            {
                await wtGuideDbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AgencyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(agency);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAgency(Guid id)
        {
            var agency = await wtGuideDbContext.Agency.FindAsync(id);
            if(agency == null)
            {
                return NotFound();
            }
            wtGuideDbContext.Agency.Remove(agency);
            await wtGuideDbContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet("searchAgency")]
        public ActionResult<AgencyProfile[]> SearchAgency(string agencyName)
        {
            var allAgencies = wtGuideDbContext.Agency.ToList();
            var agencies = allAgencies.Where(agency => agency.Name.Contains(agencyName, StringComparison.OrdinalIgnoreCase)).ToList();
            return Ok(agencies);
        }

        private bool AgencyExists(Guid id)
        {
            return (wtGuideDbContext.Agency?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
    
}
