using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using work_then_travel_api.Models;
using Microsoft.EntityFrameworkCore;

namespace work_then_travel_api.Data
{
    public class WTGuideDbContext : IdentityDbContext
    {
        public DbSet<Profile> Profile { get; set; } = default!;

        public WTGuideDbContext(DbContextOptions<WTGuideDbContext> options)
        : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Models.Profile>()
                .HasKey(nameof(Models.Profile.ID));

            base.OnModelCreating(modelBuilder);
        }
    }
}
