using MathSiteApi.Data;
using MathSiteApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MathSiteApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly DataContext _context;

        public BlogController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Blog>>> GetBlogs()
        {
            return await _context.Blog.ToListAsync();
        }

        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<Blog>>> SearchBlogs([FromQuery] string searchTerm)
        {
            return await _context.Blog
                                 .Where(b => b.Title.Contains(searchTerm) || b.Title.Contains(searchTerm))
                                 .ToListAsync();
        }
    }
}
