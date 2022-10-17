using LDNWebsiteOfficiall.IService;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.Service
{
    public class UploadFile : IUploadFile
    {
        private readonly IWebHostEnvironment _WebhostEnvironment ;
        public UploadFile (IWebHostEnvironment webHostEnvironment)
        {
            _WebhostEnvironment = webHostEnvironment;
        }
        public async Task<bool> SaveImage(IFormFile imageFile)
        {
            string ImageName= new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ','-');
            ImageName = ImageName + DateTime.Now.ToString("yymmssff")+ Path.GetExtension(imageFile.FileName);
            var imgPath =  Path.Combine(_WebhostEnvironment.ContentRootPath ,"Images",ImageName);
                if(File.Exists(imgPath))
                {
                    return false;
            }
                else
            {
                using ( var fileStream = new FileStream (imgPath, FileMode.Create))
                {
                    await imageFile.CopyToAsync(fileStream);
                }
            }
            
            
            return true;

        }
    }
}
