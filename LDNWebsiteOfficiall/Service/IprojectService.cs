using LDNWebsiteOfficiall.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.Service
{
    public interface IprojectService
    {
        Task<IEnumerable<ProjectsViewModel>> getListproject();

    }
}
