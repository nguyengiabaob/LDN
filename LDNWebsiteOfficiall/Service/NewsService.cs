using Dapper;
using LDNWebsiteOfficiall.DBContext;
using LDNWebsiteOfficiall.Helper;
using LDNWebsiteOfficiall.IProcedure;
using LDNWebsiteOfficiall.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.Service
{
    public class NewsService:INewsService
    {
        private readonly LDNWebisteContext _LDNWebisteContext;
        private readonly IDapper _dapper;
        private readonly IStoreProcedure _Procedure;
        public NewsService(LDNWebisteContext LDNWebisteContext, IDapper dapper, IStoreProcedure Procedure)
        {
            _LDNWebisteContext = LDNWebisteContext;
            _dapper = dapper;
            _Procedure = Procedure;
        }
        public async Task<IEnumerable<dynamic>> getListNews()
        {
            var param = new DynamicParameters();
          
            var result = await _dapper.GetMutipleByStoreProcedureAsync<dynamic>(_Procedure.getListNews, param);
            if (result.Any())
            {

                foreach (var item in result)
                {
                    var arrayPath = item.img.Split("\\");
                    if (arrayPath.Length > 0)
                    {
                        item.img = "/" + arrayPath[arrayPath.Length - 2] + "/" + arrayPath[arrayPath.Length - 1];
                    }

                }

            }

            return result;
        }
    }
}
