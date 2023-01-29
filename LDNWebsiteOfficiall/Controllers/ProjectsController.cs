using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LDNWebsiteOfficiall.DBContext;
using LDNWebsiteOfficiall.Models;
using LDNWebsiteOfficiall.Models.ViewModels;
using LDNWebsiteOfficiall.Service;
using LDNWebsiteOfficiall.MiddleAware;
using LDNWebsiteOfficiall.Helper;
using LDNWebsiteOfficiall.IProcedure;
using Dapper;

namespace LDNWebsiteOfficiall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly LDNWebisteContext _context;
        private readonly IprojectService _projectService;
        private readonly IDapper _dapper;
        private readonly IStoreProcedure _Procedure;
        public ProjectsController(LDNWebisteContext context, IprojectService projectService, IDapper dapper, IStoreProcedure procedure)
        {
            _context = context;
            _projectService = projectService;
            _dapper=dapper;
            _Procedure= procedure;
        }

        // GET: api/Projects
        [HttpGet]
        public async Task<IEnumerable<ProjectsViewModel>> GetProjects()
        {
            return await _projectService.getListproject();
        }

        // GET: api/Projects/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Projects>> GetProjects(long id)
        {
            var projects = await _context.Projects.FindAsync(id);

            if (projects == null)
            {
                return NotFound();
            }

            return projects;
        }

        // PUT: api/Projects/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProjects(long id, string token, Projects projects)
        {
            int endecodeToken = JwtokeinMiddleWare.ValidateToken(token);
            if (endecodeToken == -1)
            {
                return Unauthorized();
            }


            var username = _context.AccountUser.Where(x => x.Id == endecodeToken).FirstOrDefault().Username;
            if (id != projects.Id)
            {
                return BadRequest();
            }

            _context.Entry(projects).State = EntityState.Modified;
            var param = new DynamicParameters();
            param.Add("@id", id);
            await _dapper.ExecuteTransactionASync<dynamic>(_Procedure.DeleteUploadFile, param);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectsExists(id))
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

        // POST: api/Projects
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Projects>> PostProjects(string token, Projects projects)
        {
            int endecodeToken = JwtokeinMiddleWare.ValidateToken(token);
            if (endecodeToken == -1)
            {
                return Unauthorized();
            }


            var username = _context.AccountUser.Where(x => x.Id == endecodeToken).FirstOrDefault().Username;
            _context.Projects.Add(projects);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProjects", new { id = projects.Id }, projects);
        }

        // DELETE: api/Projects/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjects(string token, long id)
        {
            int endecodeToken = JwtokeinMiddleWare.ValidateToken(token);
            if (endecodeToken == -1)
            {
                return Unauthorized();
            }


            var username = _context.AccountUser.Where(x => x.Id == endecodeToken).FirstOrDefault().Username;
            var projects = await _context.Projects.FindAsync(id);
            if (projects == null)
            {
                return NotFound();
            }
            var param = new DynamicParameters();
            param.Add("@id", id);
            await _dapper.ExecuteTransactionASync<dynamic>(_Procedure.DeleteUploadFile, param);
            _context.Projects.Remove(projects);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProjectsExists(long id)
        {
            return _context.Projects.Any(e => e.Id == id);
        }
    }
}
