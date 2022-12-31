using LDNWebsiteOfficiall.IProcedure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace LDNWebsiteOfficiall.Procedure
{
    public class Procedures : IStoreProcedure
    {
        public string getListMenu => "getlistMenus ";
        public string getListNews => "News_getNews";
        public string getListProject => "Project_getProjects";
        public string getSettingBytype => "getSettingBytype";
        public string getTypeConfig => "getTypeConfig";
        public string getFields => "Fields_GetFields";
    }
}
