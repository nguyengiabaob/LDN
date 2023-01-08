using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LDNWebsiteOfficiall.DBContext;
using LDNWebsiteOfficiall.Models;
using LDNWebsiteOfficiall.MiddleAware;

namespace LDNWebsiteOfficiall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PermissionsController : ControllerBase
    {
        private readonly LDNWebisteContext _context;

        public PermissionsController(LDNWebisteContext context)
        {
            _context = context;
        }

        // GET: api/Permissions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Permissions>>> GetPermissions()
        {
            return await _context.Permissions.ToListAsync();
        }

        // GET: api/Permissions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Permissions>> GetPermissions(long id)
        {
            var permissions = await _context.Permissions.FindAsync(id);

            if (permissions == null)
            {
                return NotFound();
            }

            return permissions;
        }

        // PUT: api/Permissions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPermissions(long id, string token, Permissions permissions)
        {
            int endecodeToken = JwtokeinMiddleWare.ValidateToken(token);
            if (endecodeToken == -1)
            {
                return Unauthorized();
            }


            var username = _context.AccountUser.Where(x => x.Id == endecodeToken).FirstOrDefault().Username;
            if (id != permissions.Id)
            {
                return BadRequest();
            }
         
            _context.Entry(permissions).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PermissionsExists(id))
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

        // POST: api/Permissions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Permissions>> PostPermissions(string token, Permissions permissions)
        {
            int endecodeToken = JwtokeinMiddleWare.ValidateToken(token);
            if (endecodeToken == -1)
            {
                return Unauthorized();
            }


            var username = _context.AccountUser.Where(x => x.Id == endecodeToken).FirstOrDefault().Username;
            _context.Permissions.Add(permissions);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPermissions", new { id = permissions.Id }, permissions);
        }

        // DELETE: api/Permissions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePermissions(string token,long id)
        {
            int endecodeToken = JwtokeinMiddleWare.ValidateToken(token);
            if (endecodeToken == -1)
            {
                return Unauthorized();
            }


            var username = _context.AccountUser.Where(x => x.Id == endecodeToken).FirstOrDefault().Username;
            var permissions = await _context.Permissions.FindAsync(id);
            if (permissions == null)
            {
                return NotFound();
            }

            _context.Permissions.Remove(permissions);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PermissionsExists(long id)
        {
            return _context.Permissions.Any(e => e.Id == id);
        }
    }
}
