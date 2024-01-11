using MathSiteApi.Models.Property;

namespace MathSiteApi.Models
{
    public class Blog : CommonProperty
    {
        public DateTime? BlogDateTime { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
