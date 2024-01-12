namespace MathSiteApi.Models.Interfaces
{
    public interface IBlogService
    {
        Task<IEnumerable<Blog>> GetAllBlogsAsync();
        Task<IEnumerable<Blog>> SearchBlogsAsync(string searchTerm);
    }
}
