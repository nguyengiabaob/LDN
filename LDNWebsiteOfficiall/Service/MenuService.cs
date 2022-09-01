using LDNWebsiteOfficiall.DBContext;
using LDNWebsiteOfficiall.IService;
using LDNWebsiteOfficiall.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.Service
{
    public class MenuService : IMenuService
    {
        private readonly LDNWebisteContext _LDNWebisteContext;
        MenuService (LDNWebisteContext LDNWebisteContext)
        {
            _LDNWebisteContext = LDNWebisteContext;
        }
        public Menus InsertMenu(Menus menu)
        {

                _LDNWebisteContext.Menus.Add(menu);
                _LDNWebisteContext.Entry(menu).State= EntityState.Modified;
                _LDNWebisteContext.SaveChanges();
                return menu;
        }

        public Menus UpdateMenu(Menus menu)
        {  
            Menus oldmenu= _LDNWebisteContext.Menus.Where(x=>x.Id == menu.Id).FirstOrDefault(); 
            oldmenu = menu;
            _LDNWebisteContext.Entry(menu).State= EntityState.Modified;
            _LDNWebisteContext.SaveChanges();
            return menu;
        }
    }
}
