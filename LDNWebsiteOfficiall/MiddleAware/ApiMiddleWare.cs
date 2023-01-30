﻿using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LDNWebsiteOfficiall.MiddleAware
{
    public class ApiMiddleWare
    {
        private readonly RequestDelegate _next;
        private const string APIKEY = "ApiKey";
        public ApiMiddleWare (RequestDelegate next )
        {
            _next = next;
        }
        public async Task InvokeAsync (HttpContext context)
        {
            if(context.Request.Path.ToString().Contains("/apikey"))
            {
                if (!context.Request.Headers.TryGetValue(APIKEY, out var extractedApiKey))
                {
                    context.Response.StatusCode = 401;
                    await context.Response.WriteAsync("Api Key was not provided ");
                    return;
                }
                var appSettings = context.RequestServices.GetRequiredService<IConfiguration>();
                var apiKey = appSettings.GetValue<string>(APIKEY);
                if (!apiKey.Equals(extractedApiKey))
                {
                    context.Response.StatusCode = 401;
                    await context.Response.WriteAsync("Unauthorized client");
                    return;
                }
                await _next(context);
            }
        }
    }
}