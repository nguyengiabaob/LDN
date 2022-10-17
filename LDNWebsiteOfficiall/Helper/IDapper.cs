using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.Helper
{
    public interface IDapper:IDisposable
    {
        DbConnection GetDBConnection (string conStr);
        T GetByQueryString<T>(string query, DynamicParameters paras, CommandType commandType= CommandType.Text );
        IEnumerable<T> GetMutipleByStoreProcedure<T> (string nameStore, DynamicParameters paras, CommandType commandType= CommandType.StoredProcedure );
        T ExecuteTransaction<T> (string nameStore, DynamicParameters paras, CommandType commandType= CommandType.StoredProcedure );
        IEnumerable<T> GetMutipleByQueryString<T>(string query, DynamicParameters paras, CommandType commandType= CommandType.Text );
        Task<T>GetByStoreProcedureAsync <T> (string nameStore, DynamicParameters paras, CommandType commandType= CommandType.StoredProcedure );
        Task<IEnumerable<T>>GetMutipleByStoreProcedureAsync <T> (string nameStore, DynamicParameters paras, CommandType commandType= CommandType.StoredProcedure );
        Task<T> ExecuteTransactionASync<T> (string nameStore, DynamicParameters paras, CommandType commandType= CommandType.StoredProcedure );
      }
}
