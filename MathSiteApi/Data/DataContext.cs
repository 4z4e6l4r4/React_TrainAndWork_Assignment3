using MathSiteApi.Models;
using Microsoft.EntityFrameworkCore;

namespace MathSiteApi.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<UserLoginRequest> UserLoginRequest {  get; set; }
        public DbSet<UserLoginResponse> UserLoginResponse { get; set; }

    }
}
