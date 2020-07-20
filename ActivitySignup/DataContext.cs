using ActivitySignup.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActivitySignup
{
    public class DataContext:DbContext
    {
        public DbSet<Activity> Activities { get; set; }

        public DataContext(DbContextOptions<DataContext> opts) : base(opts) { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Activity>().HasKey(a => a.Id);
            builder.Entity<Activity>()
                .HasMany(a => a.Subscriptions)
                .WithOne(s => s.Activity);
        }
    }
}
