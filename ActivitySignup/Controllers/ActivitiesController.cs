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
        [HttpGet("{id}")]
        public IActionResult GetActivity(int id)
        {
            var act = activityRepository.GetOne(id);
            if (act == null)
                return NotFound();
            return Ok(act);
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
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (activityRepository.ActivityExists(act.Title))
                return BadRequest("Activity already exists.");
            activityRepository.SaveActivity(act);
            return Ok(act);
        }
    }
}
