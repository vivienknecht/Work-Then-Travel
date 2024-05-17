namespace work_then_travel_api.ModelView
{
    public class UserProfile
    {
        public string? Name { get; set; } = default!;
        public string Email { get; set; } = default!;

        public byte[]? Avatar { get; set; } = default!;
        public bool IsAdmin { get; set; } = default!;

    }
}
