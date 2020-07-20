using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ActivitySignup.Models
{
    public class Subscription
    {
        public int Id { get; set; }
        public int ActivityId { get; set; }

        [Required (ErrorMessage ="First name is required")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Last name is required")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Email address is required")]
        [EmailAddress(ErrorMessage ="Email address is not valid")]
        public string EmailAddress { get; set; }
        public string Comments { get; set; }
    }
}
