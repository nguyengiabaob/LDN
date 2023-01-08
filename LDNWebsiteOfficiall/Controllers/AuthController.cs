using LDNWebsiteOfficiall.DBContext;
using LDNWebsiteOfficiall.Models;
using LDNWebsiteOfficiall.Models.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly LDNWebisteContext _LDNWebisteContext;
        public AuthController  (LDNWebisteContext _lDNWebisteContext)
        {
            _LDNWebisteContext = _lDNWebisteContext;
        }
       
    [HttpPost("/api/Auth/registerAccount")]
        public ActionResult registerAccount (AccountUser account)
        {
            string passWordHash = BCrypt.Net.BCrypt.HashPassword(account.Password);
            var user = _LDNWebisteContext.AccountUser.Where(x=>x.Username.Equals(account.Username)).FirstOrDefault( );
            if(user ==null)
            {
                try{
                    account.Password= passWordHash;
                       _LDNWebisteContext.AccountUser.Add(account);
                        _LDNWebisteContext.SaveChangesAsync();
                    return Ok (new {meassage ="ok"});
                }catch (Exception ex)
                {
                    return BadRequest(new { meassage = ex.ToString()});
                }

            }
    
            return BadRequest(new { meassage = "Tài khoản tồn tại" });
        }
        [HttpPost("/api/Auth/Login")]
        public ActionResult Login(AccountUser account)
        {
            string passWordHash = BCrypt.Net.BCrypt.HashPassword(account.Password);
            var user = _LDNWebisteContext.AccountUser.Where(x => x.Username.Equals(account.Username)).FirstOrDefault();
            if (user == null || !BCrypt.Net.BCrypt.Verify(account.Password, user.Password))
            {
                return Forbid();
            }
            string securityKey= "this_is_our_supper_company_it_is long_dai_nam_contruction_Bao";
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(securityKey));

            var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            var claims = new List<Claim>();
            claims.Add(new Claim("user", user.Id.ToString()));

            var token = new JwtSecurityToken(
                  issuer: "longdainamsuppercompany",
                  audience: "longdainamsuppercompany",
                  expires: DateTime.Now.AddYears(2),
                  signingCredentials: signingCredentials
                  , claims: claims
              );
            return Ok(new JwtSecurityTokenHandler().WriteToken(token));

        }

        //[HttpPost("/api/Auth/getUserInfo")]
        //public ActionResult getUserInfo(string userName, string password)
        //{
        //    string passwordHash = BCrypt.Net.BCrypt.HashPassword(password);
        //    var user = _LDNWebisteContext.AccountUser.Where(a => a.Username.Equals(userName)).FirstOrDefault();

        //    if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.Password))
        //    {
        //        return Forbid();
        //    }

        //    return Ok(new
        //    {
        //       userName= 
        //    });
        //}

    }
}
