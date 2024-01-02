using MathSiteApi.Data;
using MathSiteApi.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace MathSiteApi.Models.Services
{
    public class AuthService : IAuthService
    {
        private readonly DataContext _dbContext;

        readonly ITokenService tokenService;
        public AuthService(ITokenService _tokenService, DataContext _dbContext)
        {
            this.tokenService = _tokenService;
            this._dbContext = _dbContext;
        }

        public async Task<UserLoginResponse> LoginUserAsync(UserLoginRequest request)
        {
            UserLoginResponse response = new();

            if (String.IsNullOrEmpty(request.Mail) ||  String.IsNullOrEmpty(request.Password))
            {
                throw new ArgumentNullException(nameof(request));
            }

            var user = await _dbContext.UserLoginRequest.FirstOrDefaultAsync(u => u.Mail == request.Mail && u.Password == request.Password);

            //kullanıcının var olup olmadığını kontrol edecek
            if (user != null)
            {
                var generateTokenInformation = await tokenService.GenerateTokenAsync(new GenerateTokenRequest { Username = request.Mail });
                response.AccessTokenExpireDate = generateTokenInformation.TokenExpireDate;
                response.AuthenticateResult = true;
                response.AuthToken = generateTokenInformation.Token;

            }
            return response;
        }

        public async Task<UserLoginResponse> RegisterUserAsync(UserLoginRequest request)
        {
            UserLoginResponse response = new();

            if (String.IsNullOrWhiteSpace(request.Mail) ||  String.IsNullOrWhiteSpace(request.Password))
            {
                throw new ArgumentNullException(nameof(request));
            }

            var user = _dbContext.UserLoginRequest.FirstOrDefault(x => x.Mail == request.Mail);

            if (user == null)
            {
                await _dbContext.UserLoginRequest.AddAsync(request);

                await _dbContext.SaveChangesAsync();

                var generateTokenInformation = await tokenService.GenerateTokenAsync(new GenerateTokenRequest { Username = request.Mail });
                response.AccessTokenExpireDate = generateTokenInformation.TokenExpireDate;
                response.AuthenticateResult = true;
                response.AuthToken = generateTokenInformation.Token;
            }
            return response;
       
        }
    }
}
