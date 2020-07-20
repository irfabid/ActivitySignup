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
    public class ActivitiesController : ControllerBase
    {
        private readonly ActivityRepository activityRepository;
        public ActivitiesController(ActivityRepository repo)
        {
            activityRepository = repo;
        }
        [HttpGet]
        public IActionResult GetActivities()
        {
            var acts = activityRepository.GetAll();
            return Ok(acts);
        }
        [HttpGet("exists/{title}")]
        public IActionResult ActivityExists(string title)
        {
            var exists = activityRepository.ActivityExists(title);
            return Ok(exists);
        }
        [HttpPost]
        public IActionResult SaveActivity([FromBody]Activity act)
        {
            return Ok();
        }
    }
}
