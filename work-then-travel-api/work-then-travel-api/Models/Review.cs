namespace work_then_travel_api.Models
{
    public class Review
    {
        public Guid ID { get; set; }
        public Guid ProfiledID { get; set; }

        public int? Rating { get; set; }
        public string? Reviews { get; set; }
        public string? Username { get; set; }
        public byte[]? UserAvatar { get; set; } 
        public DateTime DateTime { get; set; }
        public Guid AgencyID { get; set; }
       
    }
}
