using Microsoft.AspNetCore.Mvc;
using static work_then_travel_api.Framework.Identity.Identity;


namespace work_then_travel_api.Framework.Identity
{
    public static class IdentityExtensions
    {
        public static void AddIdentity(this HttpContext httpContext, Identity identity)
        {
            httpContext.Items.Add(IdentityConstants.IdentityKey, identity);
        }

        public static Identity GetIdentity(this HttpContext httpContext)
        {
            return httpContext.Items.TryGetValue(IdentityConstants.IdentityKey, out object identity) ? identity as Identity : null;
        }

        public static Identity GetIdentity(this ControllerContext controllerContext)
        {
            return controllerContext.HttpContext.GetIdentity();
        }
    }
}
