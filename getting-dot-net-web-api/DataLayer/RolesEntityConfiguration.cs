using getting_dot_net_web_api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace getting_dot_net_web_api.DataLayer
{
    public class RolesEntityConfiguration : IEntityTypeConfiguration<Roles>
    {
        public void Configure(EntityTypeBuilder<Roles> entity)
        {
            entity.Property(e => e.Id)
                .HasColumnName("id")
                .UseIdentityColumn();

            entity.Property(e => e.Name)
                .HasColumnName("name")
                .HasMaxLength(50)
                .HasMaxLength(50);

            entity.Property(e => e.Status).HasColumnName("status");

            entity.Property(e => e.IsDeleted).HasColumnName("isDeleted");

            entity.Property(e => e.CreatedAt)
                .HasColumnName("createdAt")
                .HasColumnType("datetime");

            entity.Property(e => e.UpdatedAt)
                .HasColumnName("updatedAt")
                .HasColumnType("datetime");
        }
    }
}
