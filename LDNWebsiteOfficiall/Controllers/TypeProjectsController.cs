using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LDNWebsiteOfficiall.DBContext;
using LDNWebsiteOfficiall.Models;

namespace LDNWebsiteOfficiall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TypeProjectsController : ControllerBase
    {
        private readonly LDNWebisteContext _context;

        public TypeProjectsController(LDNWebisteContext context)
        {
            _context = context;
        }

        // GET: api/TypeProjects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TypeProject>>> GetTypeProject()
        {
            return await _context.TypeProject.ToListAsync();
        }

        // GET: api/TypeProjects/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TypeProject>> GetTypeProject(long id)
        {
            var typeProject = await _context.TypeProject.FindAsync(id);

            if (typeProject == null)
            {
                return NotFound();
            }

            return typeProject;
        }

        // PUT: api/TypeProjects/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTypeProject(long id, TypeProject typeProject)
        {
            if (id != typeProject.Id)
            {
                return BadRequest();
            }

            _context.Entry(typeProject).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TypeProjectExists(id))
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

        // POST: api/TypeProjects
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TypeProject>> PostTypeProject(TypeProject typeProject)
        {
            _context.TypeProject.Add(typeProject);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTypeProject", new { id = typeProject.Id }, typeProject);
        }

        // DELETE: api/TypeProjects/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTypeProject(long id)
        {
            var typeProject = await _context.TypeProject.FindAsync(id);
            if (typeProject == null)
            {
                return NotFound();
            }

            _context.TypeProject.Remove(typeProject);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TypeProjectExists(long id)
        {
            return _context.TypeProject.Any(e => e.Id == id);
        }
    }
}
