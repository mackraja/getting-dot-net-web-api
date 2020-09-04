using getting_dot_net_web_api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace getting_dot_net_web_api.DataLayer
{
    public class UsersEntityConfiguration : IEntityTypeConfiguration<Users>
    {
        public void Configure(EntityTypeBuilder<Users> entity)
        {
            entity.Property(e => e.Id)
                .HasColumnName("id")
                .UseIdentityColumn();

            entity.Property(e => e.FirstName)
                .HasColumnName("firstName")
                .HasMaxLength(50);

            entity.Property(e => e.LastName)
                .HasColumnName("lastName")
                .HasMaxLength(50);

            entity.Property(e => e.UserName)
               .HasColumnName("userName")
               .HasMaxLength(50);

            entity.Property(e => e.Password).HasColumnName("password");

            entity.Property(e => e.Salt).HasColumnName("salt");

            entity.Property(e => e.Email)
                .HasColumnName("email")
                .HasMaxLength(50);

            entity.Property(e => e.EmailVerified).HasColumnName("emailVerified");

            entity.Property(e => e.PhoneNumber)
                .HasColumnName("phoneNumber")
                .HasMaxLength(10)
                .IsFixedLength();

            entity.Property(e => e.Status).HasColumnName("status");

            entity.Property(e => e.IsDeleted).HasColumnName("isDeleted");

            entity.Property(e => e.CreatedAt)
                .HasColumnName("createdAt")
                .HasColumnType("datetime");

            entity.Property(e => e.UpdatedAt)
                .HasColumnName("updatedAt")
                .HasColumnType("datetime");

            entity.HasOne(o => o.Roles)
              .WithMany()
              .IsRequired(true)
              .HasForeignKey("RoleId");
        }
    }
}
