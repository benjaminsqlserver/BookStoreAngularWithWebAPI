using Microsoft.EntityFrameworkCore;

namespace BookStoreAPI.Models
{
    public partial class BookStoreDBContext : Microsoft.EntityFrameworkCore.DbContext
    {

        public BookStoreDBContext()
        {

        }

        public BookStoreDBContext(DbContextOptions<BookStoreDBContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        public DbSet<Book> Books
        {
            get;
            set;
        }

        public DbSet<Category> Categories
        {
            get;
            set;
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Book>()
                  .HasOne(i => i.Category)
                  .WithMany(i => i.Books)
                  .HasForeignKey(i => i.CategoryId)
                  .HasPrincipalKey(i => i.Id);


            builder.Entity<Book>()
                  .Property(p => p.PublishDate)
                  .HasColumnType("datetime");

            builder.Entity<Book>()
                  .Property(p => p.Id)
                  .HasPrecision(10, 0);

            builder.Entity<Book>()
                  .Property(p => p.Value)
                  .HasPrecision(18, 2);

            builder.Entity<Book>()
                  .Property(p => p.CategoryId)
                  .HasPrecision(10, 0);

            builder.Entity<Category>()
                  .Property(p => p.Id)
                  .HasPrecision(10, 0);


            OnModelCreatingPartial(builder);

        }


    }
}
