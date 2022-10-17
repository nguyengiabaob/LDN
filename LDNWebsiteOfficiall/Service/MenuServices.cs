
using LDNWebsiteOfficiall.DBContext;
using LDNWebsiteOfficiall.IService;
using LDNWebsiteOfficiall.Models;
using LDNWebsiteOfficiall.Models.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LDNWebsiteOfficiall.IProcedure;
using Dapper;
using System.Data;
using LDNWebsiteOfficiall.Helper;

namespace LDNWebsiteOfficiall.Service
{
    public class MenuServices : IMenuService
    {
        private readonly LDNWebisteContext _LDNWebisteContext;
        private readonly IDapper _dapper;
        private readonly IStoreProcedure _Procedure;
        public MenuServices(LDNWebisteContext LDNWebisteContext, IDapper dapper, IStoreProcedure Procedure)
        {
            _LDNWebisteContext = LDNWebisteContext;
            _dapper= dapper;
            _Procedure =Procedure;
        }
        public async Task<IEnumerable<MenusModel>> GetListMenus ()
        {
            var param = new DynamicParameters();
            var result = await _dapper.GetMutipleByStoreProcedureAsync<MenusModel>(_Procedure.getListMenu, param);
            return result;
        
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
