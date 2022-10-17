using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.IService
{
    public interface IUploadFile
    {
        Task<bool> SaveImage(IFormFile imageFile); 

    }
}
