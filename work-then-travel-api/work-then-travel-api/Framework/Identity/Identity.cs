using System;
namespace work_then_travel_api.Framework.Identity
{
    public class Identity
    {
        public Guid ID { get; set; }

        public Guid? OriginatorID { get; set; }

        public static class IdentityConstants
        {
            public const string IdentityKey = "work-then-travel-api_IdentityClaim_Key";
        }
    }
}

