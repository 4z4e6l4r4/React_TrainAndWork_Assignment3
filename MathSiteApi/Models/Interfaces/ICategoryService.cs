namespace MathSiteApi.Models.Interfaces
{
    public interface ICategoryService
    {
        Task<IEnumerable<Category>> GetAllCategorysAsync();
    }
}
