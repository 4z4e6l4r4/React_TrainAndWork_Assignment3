namespace Math_Site.Models
{
    public class Orders
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int Stock { get; set; }
        public bool IsStatus { get; set; }
        public int CourseId { get; set; }
        public Courses Courses { get; set; }
    }
}
