using System.ComponentModel.DataAnnotations;

namespace BookStoreAPI.Models
{
    public class Book
    {
        [Key]

        public int Id
        {
            get;
            set;
        }
        [Required(ErrorMessage = "Book Name is required")]
        public string Name
        {
            get;
            set;
        }

        [Required(ErrorMessage = "Author Name is required")]
        public string Author
        {
            get;
            set;
        }

        [Required(ErrorMessage = "Description is required")]
        public string Description
        {
            get;
            set;
        }

        [Required(ErrorMessage = "Value is required")]
        public decimal Value
        {
            get;
            set;
        }

        [Required(ErrorMessage = "Publish Date is required")]
        public DateTime PublishDate
        {
            get;
            set;
        }

        [Required(ErrorMessage = "Category is required")]
        public int CategoryId
        {
            get;
            set;
        }

        public Category? Category { get; set; }

    }
}
