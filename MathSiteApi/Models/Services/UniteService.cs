using MathSiteApi.Data;
using MathSiteApi.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace MathSiteApi.Models.Services
{
    public class UniteService : IUniteService
    {
        private readonly DataContext _context;
        public UniteService(DataContext context) {

             _context = context;
        }

        public async Task<IEnumerable<Unite>> GetAllUnitesAsync()
        {
            return await _context.Unite.ToListAsync();
        }

        public async Task<IEnumerable<Unite>> GetUnitesByCategoryIdAsync(int categoryId)
        {
            // Bu metot veritabanında categoryId'ye göre filtreleme yapar ve uygun sonuçları döndürür
            return await _context.Unite
                                 .Where(u => u.CategoryId == categoryId)
                                 .ToListAsync();
        }

    }
}
