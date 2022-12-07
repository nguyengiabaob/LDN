using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LDNWebsiteOfficiall.DBContext;
using LDNWebsiteOfficiall.Models;
using Newtonsoft.Json;

namespace LDNWebsiteOfficiall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsertDatasController : ControllerBase
    {
        private readonly LDNWebisteContext _context;

        public InsertDatasController(LDNWebisteContext context)
        {
            _context = context;
        }

        // GET: api/InsertDatas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InsertData>>> GetInsertData()
        {
            return await _context.InsertData.ToListAsync();
        }
        [HttpGet("ImageInsertData/{id}")]
        public async Task<dynamic> GetInsertDataImage(int id)
        {
            var insertData = await _context.InsertData.FindAsync(id);

            if (insertData == null)
            {
                return NotFound();
            }
            if(insertData.Data!=null)
            {
                var a = JsonConvert.DeserializeObject<dynamic>(insertData.Data);
                return a;
            }
            return null ;
        }
        // GET: api/InsertDatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InsertData>> GetInsertData(int id)
        {
            var insertData = await _context.InsertData.FindAsync(id);

            if (insertData == null)
            {
                return NotFound();
            }

            return insertData;
        }

        // PUT: api/InsertDatas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInsertData(int id, InsertData insertData)
        {
            if (id != insertData.Id)
            {
                return BadRequest();
            }

            _context.Entry(insertData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InsertDataExists(id))
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

        // POST: api/InsertDatas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}")]
        public async Task<ActionResult<InsertData>> PostInsertData(IFormFile ImgFile, int id)
        {
            InsertData insertData = new InsertData();
            if(insertData!=null && ImgFile !=null)
            {
                insertData.CreateDate=DateTime.Now;
                insertData.Data= JsonConvert.SerializeObject(ImgFile);
                insertData.IdInsert = id;
                _context.InsertData.Add(insertData);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetInsertData", new { id = insertData.Id }, insertData);
            }
           return BadRequest();
        }

        // DELETE: api/InsertDatas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInsertData(int id)
        {
            var insertData = await _context.InsertData.FindAsync(id);
            if (insertData == null)
            {
                return NotFound();
            }

            _context.InsertData.Remove(insertData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InsertDataExists(int id)
        {
            return _context.InsertData.Any(e => e.Id == id);
        }
    }
}
