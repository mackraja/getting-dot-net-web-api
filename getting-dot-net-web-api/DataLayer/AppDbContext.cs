using getting_dot_net_web_api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace getting_dot_net_web_api.DataLayer
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<Roles> Roles { get; set; }
        public DbSet<Users> Users { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Add Table Entities
            modelBuilder.ApplyConfiguration(new RolesEntityConfiguration());
            modelBuilder.ApplyConfiguration(new UsersEntityConfiguration());
        }
    }

}
