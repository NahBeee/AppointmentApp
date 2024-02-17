using AppointmentApp.Server.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace AppointmentApp.Server.Data
{
    public class AppDbContext :DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        
        //define database table name
        public DbSet<Appointment> Appointments { get; set; }


    }
}
