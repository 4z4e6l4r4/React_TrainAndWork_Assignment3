namespace MathSiteApi.Models
{
    public class UserLoginResponse
    {
        public int Id { get; set; }
        public bool AuthenticateResult { get; set; }
        public string AuthToken { get; set; }
        public DateTime AccessTokenExpireDate { get; set; }
    }
}
