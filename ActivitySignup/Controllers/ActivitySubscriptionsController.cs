using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ActivitySignup.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ActivitySignup.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitySubscriptionsController : ControllerBase
    {
        private readonly ActivityRepository activityRepository;
        public ActivitySubscriptionsController(ActivityRepository repo)
        {
            activityRepository = repo;
        }
        [HttpGet]
        public IActionResult GetSubscriptions()
        {

            return Ok();
        }
        [HttpGet("{actId}")]
        public IActionResult SubscriptionExists(int actId)
        {
            var subs = activityRepository.GetSubscriptionsForActivity(actId);
            return Ok(subs);
        }
        [HttpGet("{actId}/exists/{email}")]
        public IActionResult SubscriptionExists(int actId, string email)
        {
            var exists= activityRepository.SubscriptionExists(actId, email);
            return Ok(exists);
        }
        [HttpPost]
        public IActionResult Subscribe(Subscription sub)
        {
            activityRepository.Subscribe(sub);
            return Ok(sub);
        }
        [HttpDelete]
        public IActionResult Unsubscribe(Subscription sub)
        {
            return Ok();
        }
    }
}
