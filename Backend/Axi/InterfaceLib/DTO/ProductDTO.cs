namespace InterfaceLib
{
    public class ProductDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public int Stock { get; set; }
        public int ProductGroup { get; set; }
        public int BranchID { get; set; }

        public ProductDTO(int id, string name, string location, int stock, int productGroup, int branchID)
        {
            Id = id;
            Name = name;
            Location = location;
            Stock = stock;
            ProductGroup = productGroup;
            BranchID = branchID;
        }
    }
}