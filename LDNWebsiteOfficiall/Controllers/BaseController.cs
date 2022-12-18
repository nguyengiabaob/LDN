using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
namespace LDNWebsiteOfficiall.Controllers
{
    [Authorize]
    public class BaseController : Controller
    {
        private readonly IHttpContextAccessor _contextAccessor;
        public BaseController(IHttpContextAccessor httpContextAccessor)
        {
            _contextAccessor = httpContextAccessor;

            var list = httpContextAccessor.HttpContext.User.Claims.ToList();
            if (list.Any())
            {
                Generalcs.UserID = list[0].Value.ToString().Split(new[] { "@" }, StringSplitOptions.RemoveEmptyEntries)[0].ToString().Trim();
                Generalcs.UserName = list[0].Value.ToString().Split(new[] { "@" }, StringSplitOptions.None)[0].ToString().Trim();
            }
        }
    }
}
