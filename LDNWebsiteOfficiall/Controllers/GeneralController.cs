using LDNWebsiteOfficiall.DBContext;
using LDNWebsiteOfficiall.IService;
using LDNWebsiteOfficiall.MiddleAware;
using LDNWebsiteOfficiall.Models;
using LDNWebsiteOfficiall.Models.ViewModels;
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
        private readonly LDNWebisteContext _LDNWebisteContext;
        public GeneralController( IUploadFile uploadFile, LDNWebisteContext ldnWebisteContext)
        {
            _UploadFile = uploadFile;
            _LDNWebisteContext= ldnWebisteContext;
        }
        // GET: api/<GeneralController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<GeneralController>/5
        [HttpGet("{id}")]
        public UploadFile Get(int id)
        {
            try
            {
                var Image = _LDNWebisteContext.UploadFile.Where(p => p.IdChecklist == id && p.IsUse != false ).FirstOrDefault();
                if (Image != null)
                {
                    var path= Image.Data.Replace("\"", "/");
                    return Image;
                }
                
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return null;
        
            }

        // POST api/<GeneralController>
        [HttpPost("UploadFile")]
        public async Task<IActionResult> UploadFile(string token ,[FromForm]UploadViewModel ImgFile)
        {
            int endecodeToken = JwtokeinMiddleWare.ValidateToken(token);
            if (endecodeToken == -1)
            {
                return Unauthorized();
            }


            var username = _LDNWebisteContext.AccountUser.Where(x => x.Id == endecodeToken).FirstOrDefault().Username;
            var UploadExist = _LDNWebisteContext.UploadFile.Where(p=>p.IdChecklist == ImgFile.IdChecklist).FirstOrDefault();
             if(UploadExist != null)
            {
              UploadExist.IsUse = false;
                
            }
            string a = await _UploadFile.SaveImage(ImgFile.Upload);
            if(a != "")
            {
                try
                {
                    UploadFile file= new UploadFile();
                   
                    file.CreateDate =DateTime.Now;
                    file.IdChecklist = ImgFile.IdChecklist;
                    file.IdInsertData= ImgFile.idInsertData;
                    file.Data = a ;
                    _LDNWebisteContext.UploadFile.Add(file);
                    await _LDNWebisteContext.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                return StatusCode(200);
            }
             return BadRequest();
        }

        //[HttpPost("insertUpload")]
        //public async Task<IActionResult> UploadFile2(InsertData ImgFileInfo)
        //  {
            
        //    if (ImgFileInfo != null)
        //    {
        //        _LDNWebisteContext.InsertData.Add
        //        return StatusCode(200);
        //    }
        //    return BadRequest();
        //}

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
