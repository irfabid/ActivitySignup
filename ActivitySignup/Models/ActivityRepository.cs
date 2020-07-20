using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActivitySignup.Models
{
    public class ActivityRepository
    {
        private readonly DataContext _db;
        public ActivityRepository(DataContext dbContext)
        {
            _db = dbContext;
        }
        public IReadOnlyList<Activity> GetAll()
        {
            return _db.Activities.ToList();
        }
        public void SaveActivity(Activity act)
        {

        }
        public void Subscribe(Subscription sub, Activity act)
        {

        }
        public void Unsubscribe(Subscription sub)
        {

        }
        public bool ActivityExists(string title)
        {
            return _db.Activities.Any(a => a.Title == title);
        }
    }
}
