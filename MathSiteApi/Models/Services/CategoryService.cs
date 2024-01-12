using MathSiteApi.Data;
using MathSiteApi.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace MathSiteApi.Models.Services
{
    public class CategoryService : ICategoryService

    {
        private readonly DataContext _context;

        public CategoryService(DataContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Category>> GetAllCategorysAsync()
        {
            return await _context.Category.ToListAsync();
        }
    }
}
