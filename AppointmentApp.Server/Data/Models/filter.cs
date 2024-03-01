namespace AppointmentApp.Server.Data.Models
{
    public class filter
    {
        public byte? LevelOfImportance { get; set; } = null;
        public string? SpecifiedTime { get; set; } = null;
        public DateTime? SpecifiedDate { get; set; } = null;
        public DateTime? StartDate { get; set; } = null;
        public DateTime? EndDate { get; set; } = null;
        public bool All { get; set; } = false;
        public bool Done { get; set; } = false;
        public bool Cancelled { get; set; } = false;

    }
}