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
    public class ActivityFieldsService:IActivityFields
    {

        private readonly LDNWebisteContext _LDNWebisteContext;
        private readonly IDapper _dapper;
        private readonly IStoreProcedure _Procedure;
        public ActivityFieldsService(LDNWebisteContext LDNWebisteContext, IDapper dapper, IStoreProcedure Procedure)
        {
            _LDNWebisteContext = LDNWebisteContext;
            _dapper = dapper;
            _Procedure = Procedure;
        }
        public async Task<IEnumerable<dynamic>> getActivityFields()
        {
            var param = new DynamicParameters();

            var result = await _dapper.GetMutipleByStoreProcedureAsync<dynamic>(_Procedure.getFields, param);
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
