﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace LDNWebsiteOfficiall.Models
{
    public partial class Permissions
    {
        public long Id { get; set; }
        public long UserId { get; set; }
        public long MenuId { get; set; }
        public bool? IsDeletedPermission { get; set; }
        public bool? IsEditPermission { get; set; }
        public bool? IsAddPermission { get; set; }
        public bool? IsDeleted { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? ModifyDate { get; set; }
        public string ModifyBy { get; set; }
    }
}