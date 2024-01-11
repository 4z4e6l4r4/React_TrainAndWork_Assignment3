namespace MathSiteApi.Models.Property
{

    //For Course, Lessons and Blogs
    public class CommonProperty
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public int LessonCount { get; set; }
        public int StudentCount { get; set; }

    }
}
