using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.Models.ViewModels
{
    public class UploadViewModel
    {
       public int idInsertData { get; set; }
        public int IdChecklist { get; set; }
        public IFormFile Upload { get; set; }

    }
}
