using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.IProcedure
{
    public interface IStoreProcedure
    {
        string getListMenu { get; }
        string getListProject { get; }
        string getSettingBytype { get; }
    }
}
