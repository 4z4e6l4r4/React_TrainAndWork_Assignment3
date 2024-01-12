namespace MathSiteApi.Models.Interfaces
{
    public interface IUniteService
    {
        Task<IEnumerable<Unite>> GetAllUnitesAsync();
        Task<IEnumerable<Unite>> GetUnitesByCategoryIdAsync(int categoryId);
    }
}
