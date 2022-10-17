using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.Helper
{
    public class Dapperr:IDapper
    { 
        private readonly IConfiguration _config;
        private string _ConStr= "DefaultConnection";
         public Dapperr (IConfiguration config)
        {
            _config =config;
            _ConStr = _config.GetConnectionString("DefaultConnection");
        }
        public void Dispose()
        {
            //throw new NotImplementedException();
        }

        public T ExecuteTransaction<T>(string nameStore, DynamicParameters paras, CommandType commandType = CommandType.StoredProcedure)
        {
            T result ;
            using IDbConnection db = GetDBConnection(_ConStr);
            try
            {
                if(db.State == ConnectionState.Closed)
                    db.Open();
                using var transition = db.BeginTransaction();
                try
                {
                    result = db.Query<T>(nameStore,paras, commandType: commandType, transaction:transition).FirstOrDefault();
                    transition.Commit();
                }
                catch(Exception)
                {
                    transition.Rollback();
                    throw;
                }
            }
           catch(Exception)
            {
               throw;
            }
            finally
            {
                if(db.State == ConnectionState.Open)
                {
                    db.Close();
                }
            }
            return result;
          
        }

        public async Task<T> ExecuteTransactionASync<T>(string nameStore, DynamicParameters paras, CommandType commandType = CommandType.StoredProcedure)
        {
         T result ;
            using IDbConnection db = GetDBConnection(_ConStr);
            try
            {
                if(db.State == ConnectionState.Closed)
                    db.Open();
                using var transition = db.BeginTransaction();
                try
                {
                    result = (await db.QueryAsync<T>(nameStore,paras, commandType: commandType, transaction:transition)).FirstOrDefault();
                    transition.Commit();
                }
                catch(Exception)
                {
                    transition.Rollback();
                    throw;
                }
            }
           catch(Exception)
            {
               throw;
            }
            finally
            {
                if(db.State == ConnectionState.Open)
                {
                    db.Close();
                }
            }
            return result;
        }

        public T GetByQueryString<T>(string query, DynamicParameters paras, CommandType commandType = CommandType.Text)
        {
          using IDbConnection db = GetDBConnection(_ConStr);
            return db.Query<T>(query,paras,commandType:commandType).FirstOrDefault();
        }

        public async Task<T> GetByStoreProcedureAsync<T>(string nameStore, DynamicParameters paras, CommandType commandType = CommandType.StoredProcedure)
        {
            using IDbConnection db = GetDBConnection(_ConStr);
             return (await db.QueryAsync<T>(nameStore, paras, commandType: commandType)).FirstOrDefault();
        }

        public DbConnection GetDBConnection(string conStr)
        {
          _ConStr = conStr;
            return new SqlConnection(conStr);
        }

        public IEnumerable<T> GetMutipleByQueryString<T>(string query, DynamicParameters paras, CommandType commandType = CommandType.Text)
        {
             using IDbConnection db = GetDBConnection(_ConStr);
            return db.Query<T>(query,paras,commandType:commandType);
        }
      

        public IEnumerable<T> GetMutipleByStoreProcedure<T>(string nameStore, DynamicParameters paras, CommandType commandType = CommandType.StoredProcedure)
        {
              using IDbConnection db = GetDBConnection(_ConStr);
            return db.Query<T>(nameStore,paras,commandType:commandType);
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<T>> GetMutipleByStoreProcedureAsync<T>(string nameStore, DynamicParameters paras, CommandType commandType = CommandType.StoredProcedure)
        {
             using IDbConnection db = GetDBConnection(_ConStr);
             return (await db.QueryAsync<T>(nameStore, paras, commandType: commandType));
        }
    }
   
}
