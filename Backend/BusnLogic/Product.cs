using InterfaceLib;
namespace BusnLogic
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public int Stock { get; set; }
        public int ProductGroup { get; set; }
        public int BranchID { get; set; }

        public Product(int id, string name, string location, int stock, int productGroup, int branchID)
        {
            Id = id;
            Name = name;
            Location = location;
            Stock = stock;
            ProductGroup = productGroup;
            BranchID = branchID;
        }

        public Product()
        {

        }
        public Product(ProductDTO dto)
        {
            Id =dto.Id;
            Name = dto.Name;
            Location = dto.Location;
            Stock = dto.Stock;
            ProductGroup = dto.ProductGroup;
            BranchID = dto.BranchID;
        }
        public ProductDTO GetDTO()
        {
            ProductDTO dto = new ProductDTO(Id, Name, Location, Stock, ProductGroup, BranchID);
            return dto;
        }

        public override string? ToString()
        {
            return Name;
        }
    }
}