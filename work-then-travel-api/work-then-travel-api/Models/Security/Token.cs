namespace work_then_travel_api.Models.Security
{
    public class Token
    {
        public string Value { get; set; } = default!;
        public DateTime Expiry { get; set; }
    }
}
