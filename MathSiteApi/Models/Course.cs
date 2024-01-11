using MathSiteApi.Models.Property;

namespace MathSiteApi.Models
{
    public class Course : CommonProperty
    {
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public double Rating { get; set; }
        public TimeSpan Duration { get; set; }
        public decimal OriginalPrice { get; set; }
        public decimal DiscountPrice { get; set; }
    }
}
