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
        [HttpPost]
        public IActionResult Subscribe(Subscription sub)
        {
            return Ok();
        }
        [HttpDelete]
        public IActionResult Unsubscribe(Subscription sub)
        {
            return Ok();
        }
    }
}
