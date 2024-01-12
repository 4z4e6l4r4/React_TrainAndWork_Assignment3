using MathSiteApi.Data;
using MathSiteApi.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace MathSiteApi.Models.Services
{
    public class CourseService : ICourseService

    {
        private readonly DataContext _context;

        public CourseService(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Course>> GetAllCoursesAsync()
        {
            // Bu metot veritabanından tüm kursları getirir
            return await _context.Course.ToListAsync();
        }
    }
}
