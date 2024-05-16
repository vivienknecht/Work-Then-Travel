namespace work_then_travel_api.Models.Security
{
    public class RegisterModel
    {
        public string Name { get; set; } = default!;
        public string Email { get; set; } = default!;
        public string Password { get; set; } = default!;
    }
}
