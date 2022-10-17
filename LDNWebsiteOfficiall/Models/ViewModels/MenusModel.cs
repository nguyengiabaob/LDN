using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.Models.ViewModels
{
    public class MenusModel
    {
         public int Id { get; set; }
        public string Name { get; set; }
        public int? ParentMenu { get; set; }
        public string PageContent { get; set; }
        public string Component { get; set; }
        public DateTime? CreateDate { get; set; }
        public string CreateBy { get; set; }
        public string Icon { get; set; }
        public long? PagesId { get; set; }
        public string URL { get; set; }
    }
}
