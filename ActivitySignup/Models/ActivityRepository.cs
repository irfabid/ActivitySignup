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
        public Activity GetOne(int id)
        {
            return _db.Activities.FirstOrDefault(a => a.Id == id);
        }
        public IReadOnlyList<Subscription> GetSubscriptionsForActivity(int actId)
        {
            return _db.Subscriptions.Where(s => s.ActivityId == actId).ToList();
        }
        public void SaveActivity(Activity act)
        {
            _db.Activities.Add(act);
            _db.SaveChanges();
        }
        public void Subscribe(Subscription sub)
        {
            _db.Subscriptions.Add(sub);
            _db.SaveChanges();
        }
        public void Unsubscribe(Subscription sub)
        {

        }
        public bool ActivityExists(string title)
        {
            return _db.Activities.Any(a => a.Title == title);
        }
        public bool SubscriptionExists(int actId, string email)
        {
            return _db.Subscriptions.Any(s => s.ActivityId == actId && s.EmailAddress == email);
        }
    }
}
