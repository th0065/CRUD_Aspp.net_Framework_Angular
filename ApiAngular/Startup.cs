using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(ApiAngular.Startup))]

namespace ApiAngular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
           

           

        
        }
    }
}
