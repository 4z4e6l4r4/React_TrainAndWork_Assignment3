using MathSiteApi.Models;
using MathSiteApi.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace MathSiteApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        readonly IAuthService authService;

        public AuthController(IAuthService authService)
        {
            this.authService=authService;
        }

        [HttpPost("LoginUser")]
        public async Task<ActionResult<UserLoginResponse>> LoginUserAsync([FromBody] UserLoginRequest request)
        {
            var result = await authService.LoginUserAsync(request);
            return result;
        }

        [HttpPost("Register")]
        public async Task<ActionResult<UserLoginResponse>> RegisterUserAsync([FromBody] UserLoginRequest request)
        {
            var result = await authService.RegisterUserAsync(request);
            return result;
        }

    }
}
