using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.Models.ViewModels
{
    public class ProjectsViewModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Owner { get; set; }
        public string Description { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public decimal? Total { get; set; }
        public string Address { get; set; }
        public DateTime? CreateDate { get; set; }
        public long? TypeContructedId { get; set; }
        public long? StatusId { get; set; }
        public bool? IsDeleted { get; set; }
        public string ModifyBy { get; set; }
        public DateTime? ModifyDate { get; set; }
        public string Data { get; set; }
    }
}
