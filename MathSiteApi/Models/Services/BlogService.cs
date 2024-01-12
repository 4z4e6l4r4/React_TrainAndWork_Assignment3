using MathSiteApi.Data;
using MathSiteApi.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace MathSiteApi.Models.Services
{
    public class BlogService : IBlogService

    {
        private readonly DataContext _context;

        public BlogService(DataContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Blog>> GetAllBlogsAsync()
        {
            // Bu metot veritabanından tüm blogları getirir
            return await _context.Blog.ToListAsync();
        }

        public async Task<IEnumerable<Blog>> SearchBlogsAsync(string searchTerm)
        {
            // Bu metot veritabanında arama yapar ve uygun sonuçları döndürür
            return await _context.Blog
                        .Where(b => b.Title.Contains(searchTerm) || b.Description.Contains(searchTerm))
                        .ToListAsync();
        }
    }
}
