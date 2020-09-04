using System;
using System.Collections.Generic;

namespace getting_dot_net_web_api.Models
{
    public partial class Users
    {
        public int Id { get; set; }
        public int? RoleId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public string Email { get; set; }
        public short? EmailVerified { get; set; }
        public string PhoneNumber { get; set; }
        public short? Status { get; set; }
        public short? IsDeleted { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
