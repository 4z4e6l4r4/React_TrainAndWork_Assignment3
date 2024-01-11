using MathSiteApi.Models.Property;

namespace MathSiteApi.Models
{
    public class Unite : CommonProperty
    {
        //LessonCount = Kazanım Sayısı

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
