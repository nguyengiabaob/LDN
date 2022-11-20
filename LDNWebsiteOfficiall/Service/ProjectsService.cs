using Dapper;
using LDNWebsiteOfficiall.DBContext;
using LDNWebsiteOfficiall.Helper;
using LDNWebsiteOfficiall.IProcedure;
using LDNWebsiteOfficiall.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.Service
{
    public class ProjectsService :IprojectService
    {
        private readonly LDNWebisteContext _LDNWebisteContext;
        private readonly IDapper _dapper;
        private readonly IStoreProcedure _Procedure;
        public ProjectsService(LDNWebisteContext LDNWebisteContext, IDapper dapper, IStoreProcedure Procedure)
        {
            _LDNWebisteContext = LDNWebisteContext;
            _dapper = dapper;
            _Procedure = Procedure;
        }
        public async Task<IEnumerable<ProjectsViewModel>> getListproject()
        {
            var param = new DynamicParameters();
            var result = await _dapper.GetMutipleByStoreProcedureAsync<ProjectsViewModel>(_Procedure.getListProject, param);
            return result;
        }
    }
}
