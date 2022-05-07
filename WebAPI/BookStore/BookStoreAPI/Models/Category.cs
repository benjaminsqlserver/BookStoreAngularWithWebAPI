using System.ComponentModel.DataAnnotations;

namespace BookStoreAPI.Models
{
    public class Category
    {

        [Key]

        public int Id
        {
            get;
            set;
        }


        public ICollection<Book> Books { get; set; }


        [Required(ErrorMessage = "Category Name is required")]
        public string Name
        {
            get;
            set;
        }
    }
}
