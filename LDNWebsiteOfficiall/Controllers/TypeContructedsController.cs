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
    public class TypeContructedsController : ControllerBase
    {
        private readonly LDNWebisteContext _context;

        public TypeContructedsController(LDNWebisteContext context)
        {
            _context = context;
        }

        // GET: api/TypeContructeds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TypeContructed>>> GetTypeContructed()
        {
            return await _context.TypeContructed.ToListAsync();
        }

        // GET: api/TypeContructeds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TypeContructed>> GetTypeContructed(long id)
        {
            var typeContructed = await _context.TypeContructed.FindAsync(id);

            if (typeContructed == null)
            {
                return NotFound();
            }

            return typeContructed;
        }

        // PUT: api/TypeContructeds/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTypeContructed(long id, string token, TypeContructed typeContructed)
        {
            int endecodeToken = JwtokeinMiddleWare.ValidateToken(token);
            if (endecodeToken == -1)
            {
                return Unauthorized();
            }


            var username = _context.AccountUser.Where(x => x.Id == endecodeToken).FirstOrDefault().Username;
            if (id != typeContructed.Id)
            {
                return BadRequest();
            }
          
            _context.Entry(typeContructed).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TypeContructedExists(id))
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

        // POST: api/TypeContructeds
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TypeContructed>> PostTypeContructed( string token,TypeContructed typeContructed)
        {
            int endecodeToken = JwtokeinMiddleWare.ValidateToken(token);
            if (endecodeToken == -1)
            {
                return Unauthorized();
            }


            var username = _context.AccountUser.Where(x => x.Id == endecodeToken).FirstOrDefault().Username;
            _context.TypeContructed.Add(typeContructed);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTypeContructed", new { id = typeContructed.Id }, typeContructed);
        }

        // DELETE: api/TypeContructeds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTypeContructed(string token,long id)
        {
            int endecodeToken = JwtokeinMiddleWare.ValidateToken(token);
            if (endecodeToken == -1)
            {
                return Unauthorized();
            }


            var username = _context.AccountUser.Where(x => x.Id == endecodeToken).FirstOrDefault().Username;
            var typeContructed = await _context.TypeContructed.FindAsync(id);
            if (typeContructed == null)
            {
                return NotFound();
            }

            _context.TypeContructed.Remove(typeContructed);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TypeContructedExists(long id)
        {
            return _context.TypeContructed.Any(e => e.Id == id);
        }
    }
}
