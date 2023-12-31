namespace Math_Site.Models
{
    public class Courses 
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public List<Orders> Orders { get; set; }

    }
}
