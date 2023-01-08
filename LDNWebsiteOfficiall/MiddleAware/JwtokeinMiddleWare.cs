using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.MiddleAware
{
    public static class JwtokeinMiddleWare
    {
        public static int ValidateToken (string token)
        {
            string securityKey = "this_is_our_supper_company_it_is long_dai_nam_contruction_Bao";
            var symmetricSecurityKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(securityKey));
            var endecodeToken = new JwtSecurityTokenHandler().ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = symmetricSecurityKey,
                ValidateIssuer = false,
                ValidateAudience = false,

            }, out SecurityToken validatedToken);
            if(validatedToken!=null )
            {
                var jwtToken = (JwtSecurityToken)validatedToken;
                var accountId = int.Parse(jwtToken.Claims.First(x => x.Type == "user").Value);
                if(accountId == null)
                {
                    return -1;
                }
                return accountId;
            }
            return -1;
           
        }
    }
}
