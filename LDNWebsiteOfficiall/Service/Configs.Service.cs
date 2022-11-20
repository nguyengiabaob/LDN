using Dapper;
using LDNWebsiteOfficiall.DBContext;
using LDNWebsiteOfficiall.Helper;
using LDNWebsiteOfficiall.IProcedure;
using LDNWebsiteOfficiall.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LDNWebsiteOfficiall.Models;
using LDNWebsiteOfficiall.IService;

namespace LDNWebsiteOfficiall.Service
{
    public class ConfigsService : IConfigService
    {
        private readonly LDNWebisteContext _LDNWebisteContext;
        private readonly IDapper _dapper;
        private readonly IStoreProcedure _Procedure;
        public ConfigsService(LDNWebisteContext LDNWebisteContext, IDapper dapper, IStoreProcedure Procedure)
        {
            _LDNWebisteContext = LDNWebisteContext;
            _dapper = dapper;
            _Procedure = Procedure;
        }
        public async Task<IEnumerable<Config>> getSettingByType(string type)
        {
            var param = new DynamicParameters();
            param.Add("@type", type);
            var result = await _dapper.GetMutipleByStoreProcedureAsync<Config>(_Procedure.getSettingBytype, param);
            return result;
        }


    }
}
