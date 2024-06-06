namespace work_then_travel_api.ModelView
{
    public class ReviewView
    {
        public Guid ReviewID { get; set; }
       

        public int? Rating { get; set; }
        public string? Reviews { get; set; }
        public string? Username { get; set; }
        public byte[]? UserAvatar { get; set; }
        public DateTime DateTime { get; set; }
       
    }
}
