namespace InterfaceLib
{
    public interface IProductContainer
    {
        public List<ProductDTO> Getproducts();
        public void Create(ProductDTO product);
        public void Delete(int id);
        public void Update(ProductDTO product);
        public ProductDTO GetProductById(int id);
        public List<ProductDTO> GetAllProductsByProductGroupID(int Id);
    }
}
