using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiAngular.Models
{
    public class Personne
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(150)]
        public string firstName { get; set; }

        [MaxLength(80)]
        public string lastName { get; set; }

        [MaxLength(50)]
        public string address { get; set; }
        public DateTime birthDay { get; set; }

        [MaxLength(15)]
        public string phone { get; set; }
    }

}
