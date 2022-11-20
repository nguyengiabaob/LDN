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

        public string getListProject => "Project_getProjects";
        public string getSettingBytype => "getSettingBytype";
    }
}
