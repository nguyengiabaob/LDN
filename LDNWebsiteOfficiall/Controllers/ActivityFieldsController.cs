using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LDNWebsiteOfficiall.DBContext;
using LDNWebsiteOfficiall.Models;
using LDNWebsiteOfficiall.IService;
using LDNWebsiteOfficiall.MiddleAware;

namespace LDNWebsiteOfficiall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivityFieldsController : ControllerBase
    {
        private readonly LDNWebisteContext _context;
        private readonly IActivityFields _activityFields;

        public ActivityFieldsController(LDNWebisteContext context, IActivityFields activityFields)
        {
            _context = context;
            _activityFields = activityFields;
        }

        // GET: api/ActivityFields
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ActivityFields>>> GetActivityFields()
        {
            return await _context.ActivityFields.ToListAsync();
        }
        [HttpGet("FieldsList")]
        public async Task<IEnumerable<dynamic>> GetListNews()
        {
            return await _activityFields.getActivityFields();
        }
        // GET: api/ActivityFields/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ActivityFields>> GetActivityFields(int id)
        {
            var activityFields = await _context.ActivityFields.FindAsync(id);

            if (activityFields == null)
            {
                return NotFound();
            }

            return activityFields;
        }

        // PUT: api/ActivityFields/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutActivityFields(int id, string token, ActivityFields activityFields)
        {
            int endecodeToken = JwtokeinMiddleWare.ValidateToken(token);
            if (endecodeToken == -1)
            {
                return Unauthorized();
            }


            var username = _context.AccountUser.Where(x => x.Id == endecodeToken).FirstOrDefault().Username;
            if (id != activityFields.Id)
            {
                return BadRequest();
            }
            activityFields.CreateBy = username;
            _context.Entry(activityFields).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActivityFieldsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ActivityFields
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ActivityFields>> PostActivityFields(string token, ActivityFields activityFields)
        {
            int endecodeToken = JwtokeinMiddleWare.ValidateToken(token);
            if (endecodeToken == -1)
            {
                return Unauthorized();
            }


            var username = _context.AccountUser.Where(x => x.Id == endecodeToken).FirstOrDefault().Username;
            activityFields.CreateBy = username;
            _context.ActivityFields.Add(activityFields);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetActivityFields", new { id = activityFields.Id }, activityFields);
        }

        // DELETE: api/ActivityFields/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivityFields(string token, int id)
        {

            int endecodeToken = JwtokeinMiddleWare.ValidateToken(token);
            if (endecodeToken == -1)
            {
                return Unauthorized();
            }


            var username = _context.AccountUser.Where(x => x.Id == endecodeToken).FirstOrDefault().Username;
            var activityFields = await _context.ActivityFields.FindAsync(id);
            if (activityFields == null)
            {
                return NotFound();
            }
            activityFields.IsDeleted = true;

            _context.Entry(activityFields).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ActivityFieldsExists(int id)
        {
            return _context.ActivityFields.Any(e => e.Id == id);
        }
    }
}
