using LDNWebsiteOfficiall.Models;
using LDNWebsiteOfficiall.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.IService
{
    public interface IMenuService
    {
        Task<IEnumerable<MenusModel>> GetListMenus();
        Menus InsertMenu (Menus menu);
        Menus UpdateMenu (Menus menu);
    }
}
