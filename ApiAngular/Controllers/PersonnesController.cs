using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using ApiAngular.Models;

namespace ApiAngular.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PersonnesController : ApiController
    {
        private BDApiAngularContext db = new BDApiAngularContext();

        // GET: api/Personnes
        public IQueryable<Personne> Getpersonnes()
        {
            return db.personnes;
        }

        // GET: api/Personnes/5
        [ResponseType(typeof(Personne))]
        public IHttpActionResult GetPersonne(int id)
        {
            Personne personne = db.personnes.Find(id);
            if (personne == null)
            {
                return NotFound();
            }

            return Ok(personne);
        }

        // PUT: api/Personnes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPersonne(int id, Personne personne)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != personne.Id)
            {
                return BadRequest();
            }

            db.Entry(personne).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonneExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Personnes
        [ResponseType(typeof(Personne))]
        public IHttpActionResult PostPersonne(Personne personne)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.personnes.Add(personne);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = personne.Id }, personne);
        }

        // DELETE: api/Personnes/5
        [ResponseType(typeof(Personne))]
        public IHttpActionResult DeletePersonne(int id)
        {
            Personne personne = db.personnes.Find(id);
            if (personne == null)
            {
                return NotFound();
            }

            db.personnes.Remove(personne);
            db.SaveChanges();

            return Ok(personne);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PersonneExists(int id)
        {
            return db.personnes.Count(e => e.Id == id) > 0;
        }
    }
}