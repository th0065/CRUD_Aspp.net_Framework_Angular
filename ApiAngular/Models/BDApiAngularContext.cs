using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ApiAngular.Models
{
    public class BDApiAngularContext : DbContext 
    {
        public BDApiAngularContext() : base("ConAtelier") { }

        public DbSet<Personne> personnes { get; set; }
    }
}