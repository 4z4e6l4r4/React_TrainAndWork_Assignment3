using MathSiteApi.Models;

namespace MathSiteApi.Models.Interfaces
{
    public interface IAuthService
    {
        public Task<UserLoginResponse> LoginUserAsync(UserLoginRequest request);
        public Task<UserLoginResponse> RegisterUserAsync(UserLoginRequest request);
    }
}
