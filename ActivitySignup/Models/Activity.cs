using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ActivitySignup.Models
{
    public class Activity
    {
        private List<Subscription> _subscriptions = new List<Subscription>();
        public int Id { get; set; }
        [Required(ErrorMessage ="Activity title is required")]
        public string Title { get; set; }
        public IReadOnlyList<Subscription> Subscriptions => _subscriptions;
    }
}
