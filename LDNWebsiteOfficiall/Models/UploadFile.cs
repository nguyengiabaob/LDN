﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace LDNWebsiteOfficiall.Models
{
    public partial class UploadFile
    {
        public int Id { get; set; }
        public string Data { get; set; }
        public int? IdChecklist { get; set; }
        public int? IdInsertData { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? ModifyDate { get; set; }
        public bool? IsDeleted { get; set; }
        public bool? IsUse { get; set; }
    }
}