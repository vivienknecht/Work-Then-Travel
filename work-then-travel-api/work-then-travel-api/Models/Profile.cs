namespace work_then_travel_api.Models
{
    public class Profile
    {
        public Guid ID { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public byte[]? Avatar { get; set; } = default!;
        public bool IsAdmin { get; set; }
    }
}
