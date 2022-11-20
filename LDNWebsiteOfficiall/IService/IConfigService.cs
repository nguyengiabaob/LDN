using LDNWebsiteOfficiall.Models;
using LDNWebsiteOfficiall.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.IService
{
    public interface IConfigService
    {
        Task<IEnumerable<Config>> getSettingByType(string type);
    }
}
