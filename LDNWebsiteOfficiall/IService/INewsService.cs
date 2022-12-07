using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.IService
{
   public interface INewsService
    {
        Task<IEnumerable<dynamic>> getListNews();
    }
}
