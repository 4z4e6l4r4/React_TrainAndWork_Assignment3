using Microsoft.EntityFrameworkCore;

namespace Math_Site.Data
{
    public class DataContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"data source=AZRA;initial catalog=Math;integrated security=true");
        }
    }
}
