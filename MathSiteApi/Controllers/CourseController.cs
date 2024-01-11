using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using MathSiteApi.Data;
using MathSiteApi.Models;

[Route("api/[controller]")]
[ApiController]
public class CoursesController : ControllerBase
{
    private readonly DataContext _context;

    public CoursesController(DataContext context)
    {
        _context = context;
    }

    // GET: api/Courses
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
    {
        return await _context.Course.ToListAsync();
    }

    // GET: api/Courses/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Course>> GetCourse(int id)
    {
        var course = await _context.Course.FindAsync(id);

        if (course == null)
        {
            return NotFound();
        }

        return course;
    }
}
