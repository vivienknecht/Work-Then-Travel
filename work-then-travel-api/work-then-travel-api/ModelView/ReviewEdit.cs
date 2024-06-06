namespace work_then_travel_api.ModelView
{
    public class ReviewEdit
    {
        public Guid ReviewID { get; set; }
        public int Rating { get; set; }
        public string Reviews { get; set; }
        public DateTime DateTime { get; set; }
        public string AgencyName { get; set; }
    }
}
