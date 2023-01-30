using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.IService
{
    public interface IActivityFields
    {
        Task<IEnumerable<dynamic>> getActivityFields();
        Task<IEnumerable<dynamic>> ListActivityFieldsShow();
    }
}
