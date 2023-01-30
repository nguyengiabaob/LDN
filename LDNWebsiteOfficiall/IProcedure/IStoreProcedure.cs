using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.IProcedure
{
    public interface IStoreProcedure
    {
        string getListMenu { get; }
        string getListNews { get; }
        string getListProject { get; }
        string getSettingBytype { get; }
        string getTypeConfig { get; }
        string getFields { get;}
        string Field_getToShowField { get; }
        string DeleteUploadFile { get;}
    }
}
