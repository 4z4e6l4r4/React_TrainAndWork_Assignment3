using MathSiteApi.Data;
using MathSiteApi.Models.Interfaces;
using MathSiteApi.Models.Services;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace MathSiteApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddDbContext<DataContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("MathSiteDbConnection")));

            builder.Services.AddScoped<IAuthService, AuthService>();
            builder.Services.AddScoped<ITokenService, TokenService>();

            // Add CourseService to DI container
            builder.Services.AddScoped<ICategoryService, CategoryService>();
            builder.Services.AddScoped<ICourseService, CourseService>();
            builder.Services.AddScoped<IUniteService, UniteService>();
            builder.Services.AddScoped<IBlogService, BlogService>();


            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }
    }
}
