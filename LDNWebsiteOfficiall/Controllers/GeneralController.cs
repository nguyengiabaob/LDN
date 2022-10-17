using LDNWebsiteOfficiall.IService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LDNWebsiteOfficiall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GeneralController : ControllerBase
    {
        private readonly IUploadFile _UploadFile;
        public GeneralController( IUploadFile uploadFile)
        {
            _UploadFile = uploadFile;
        }
        // GET: api/<GeneralController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<GeneralController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<GeneralController>
        [HttpPost("UploadFile")]
        public async Task<IActionResult> UploadFile(IFormFile ImgFile)
        {
            bool a = await _UploadFile.SaveImage(ImgFile);
            if(a == true)
            {
                return StatusCode(200);
            }
             return BadRequest();
        }

        // PUT api/<GeneralController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<GeneralController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
