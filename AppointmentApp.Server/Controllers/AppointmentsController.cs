using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AppointmentApp.Server.Data;
using AppointmentApp.Server.Data.Models;

namespace AppointmentApp.Server.Controllers
{
    [Route("api/appointment")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AppointmentsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/appointment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
        {
            if(_context.Appointments == null)
            {
                return NotFound("No Data Found");
            }
            return await _context.Appointments.Where(e=>! e.Cancelled && !e.Done).ToListAsync();
        }

        // GET: api/Appointments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Appointment>> GetAppointment(int id)
        {
            var appointment = await _context.Appointments.FindAsync(id);

            if (appointment == null)
            {
                return NotFound();
            }

            return appointment;
        }
        [HttpPost("filters")]
        public async Task<ActionResult<IEnumerable<Appointment>>> FilteredAppoinments(filter filters)
        {
            if (_context.Appointments == null)
            {
                return NotFound("No Data Found");
            }

            List<Appointment> allData = await _context.Appointments.ToListAsync();

            if (filters.All)
            {
                return allData;
            }
            if (filters.LevelOfImportance !=null)
            {
                allData = allData.Where(e => e.LevelOfImportance == filters.LevelOfImportance).ToList();            
            }
            if (filters.SpecifiedDate != null)
            {
                allData = allData.Where(e => e.Date == filters.SpecifiedDate).ToList();
            }
            if (filters.StartDate != null && filters.EndDate != null)
            {
                allData = allData.Where(e => e.Date == filters.StartDate && e.Date <= filters.EndDate).ToList();
            }
            allData = allData.Where(e => e.Done == filters.Done).ToList();
            allData =allData.Where(e=> e.Cancelled == filters.Cancelled).ToList();

            return allData;
        }

        // PUT: api/Appointments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppointment(int id, Appointment appointment)
        {
            if (id != appointment.ID)
            {
                return BadRequest("You are trying to modify the wrong appoinment");
            }

            _context.Entry(appointment).State = EntityState.Modified;

            try
            {
                Appointment entry_ = await _context.Appointments.FindAsync(appointment.ID);
                //check each column to avoid assign the same value
                if (entry_.Title != appointment.Title) 
                { 
                    entry_.Title = appointment.Title;
                }

                if (entry_.Description != appointment.Description)
                {
                    entry_.Description = appointment.Description;
                }

                if (entry_.Address != appointment.Address)
                {
                    entry_.Address = appointment.Address;
                }

                if (entry_.Done != appointment.Done)
                {
                    entry_.Done = appointment.Done;
                }

                if (entry_.Cancelled != appointment.Cancelled)
                {
                    entry_.Cancelled = appointment.Cancelled;
                }

                if (entry_.Date != appointment.Date)
                {
                    entry_.Date = appointment.Date;
                }

                if (entry_.Time != appointment.Time)
                {
                    entry_.Time = appointment.Time;
                }

                if (entry_.LevelOfImportance != appointment.LevelOfImportance)
                {
                    entry_.LevelOfImportance = appointment.LevelOfImportance;
                }

                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppointmentExists(id))
                {
                    return NotFound("The appoinment with this ID " + id + " is not found!!!");
                }
                else
                {
                    throw;
                }
            }

            return Ok("Appoinment created!!");
        }

        // POST: api/Appointments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Appointment>> PostAppointment(Appointment appointment)
        {
            if (_context.Appointments == null)
            {
                return Problem("Appoinment's entity is null");
            }
            try
            {
                _context.Appointments.Add(appointment);
                await _context.SaveChangesAsync();
            } catch (DbUpdateConcurrencyException e)
            {;
                return BadRequest("Could not create the new Appoinment: " + e.Message);
            }

            return CreatedAtAction("GetAppointment", new { id = appointment.ID }, appointment);
        }

        // DELETE: api/Appointments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppointment(int id)
        {
            var appointment = await _context.Appointments.FindAsync(id);
            if (appointment == null)
            {
                return NotFound("No Appoinment with this ID "+ id);
            }

            
            _context.Appointments.Remove(appointment);
            await _context.SaveChangesAsync();

            return Ok("Appoinment cancelled");
        }

        private bool AppointmentExists(int id)
        {
            return _context.Appointments.Any(e => e.ID == id);
        }
    }
}
