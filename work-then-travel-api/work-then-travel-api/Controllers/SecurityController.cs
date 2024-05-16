using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using work_then_travel_api.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using work_then_travel_api.Models.Security;
using work_then_travel_api.Models;

namespace work_then_travel_api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SecurityController : ControllerBase
    {
        private readonly UserManager<IdentityUser> userManager;

        private readonly SignInManager<IdentityUser> signInManager;

        private readonly IConfiguration configuration;
        private readonly WTGuideDbContext wtGuideDbContext;

        public SecurityController(
               UserManager<IdentityUser> userManager,
               SignInManager<IdentityUser> signInManager,
               IConfiguration configuration,
               WTGuideDbContext wtGuideDbContext
           )
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.configuration = configuration;
            this.wtGuideDbContext = wtGuideDbContext;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<Token> Register(RegisterModel registerModel)
        {
            IdentityUser identityUser = new IdentityUser() { Email = registerModel.Email, UserName = registerModel.Email };

            IdentityResult result = await userManager.CreateAsync(identityUser, registerModel.Password);

            IdentityUser user = await userManager.FindByEmailAsync(registerModel.Email);

            string imagePath = "Images/default-avatar.png";
            byte[] imageBytes = System.IO.File.ReadAllBytes(imagePath);

            Profile profile = new Profile()
            {
                ID = Guid.Parse(user.Id),
                Name = registerModel.Name,
                Email = registerModel.Email,
                Avatar = imageBytes,
                IsAdmin = false,
            };

            wtGuideDbContext.Profile.Add(profile);

            wtGuideDbContext.SaveChanges();

            return GenerateToken(user, profile.IsAdmin);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<Token> Login(LoginModel loginModel)
        {
            IdentityUser identityUser = await userManager.FindByEmailAsync(loginModel.Email);

            Microsoft.AspNetCore.Identity.SignInResult result = await signInManager.CheckPasswordSignInAsync(identityUser, loginModel.Password, true);

            var profile = await wtGuideDbContext.Profile.FindAsync(Guid.Parse(identityUser.Id));

            return GenerateToken(identityUser, profile.IsAdmin);
        }

        private Token GenerateToken(IdentityUser user, Boolean userRole)
        {
            string role = AppRoles.User;
            if (userRole)
                role = AppRoles.Admin;

            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, role),
            };

            SymmetricSecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.configuration.GetValue<string>("Authentication:Secret")));

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: configuration.GetValue<string>("Authentication:Issuer"),
                audience: configuration.GetValue<string>("Authentication:Issuer"),
                claims: claims,
                expires: DateTime.Now.AddDays(this.configuration.GetValue<int>("Authentication:ExpiryTimeInDays")),
                signingCredentials: new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256)
            );

            return new Token()
            {
                Value = new JwtSecurityTokenHandler().WriteToken(token),
                Expiry = token.ValidTo,
            };
        }
    }
}
