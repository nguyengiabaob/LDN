using LDNWebsiteOfficiall.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.IService
{
    interface IMenuService
    {
        Menus InsertMenu (Menus menu);
        Menus UpdateMenu (Menus menu);
    }
}
