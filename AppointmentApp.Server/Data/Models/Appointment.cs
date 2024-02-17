﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;

namespace AppointmentApp.Server.Data.Models
{
    public class Appointment
    {
        [Key]
        public int ID { get; set; }

        [MaxLength(150), Column(TypeName = "nvarchar(150)")]
        public string Title { get; set; } = "Title";

        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string Description { get; set; } = "Description";

        public DateTime CreatedTime { get; set; } = DateTime.Now;

        public DateTime UpdatedTime { get; set; } = DateTime.Now;

        public DateTime Date { get; set; } = DateTime.Now;

        public string Address { get; set; } = "Address";

        [MaxLength(10), Column(TypeName = "nvarchar(10)")]
        public string Time { get; set; } = "12:30";
    }
}