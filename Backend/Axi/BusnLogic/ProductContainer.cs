using InterfaceLib;

namespace BusnLogic
{
    public class ProductContainer
    {
        private readonly IProductContainer container;

        public ProductContainer(IProductContainer container)
        {
            this.container = container;
        }

        public List<Product> Getproducts()
        {
            List<ProductDTO> dtos = container.Getproducts();
            List<Product> products = new List<Product>();
            foreach (ProductDTO dto in dtos)
            {
                products.Add(new Product(dto));
            }
            return products;
        }


        public void Create(Product p)
        {
            ProductDTO product = p.GetDTO();
            container.Create(product);
        }

        public void Delete(int ID)
        {
            container.Delete(ID);
        }

        public void Update(Product p)
        {
            ProductDTO product = p.GetDTO();
            container.Update(product);
        }

        public Product? GetProductById(int id)
        {
            ProductDTO? dto = container.GetProductById(id);
            return new Product(dto);
        }

        public List<Product> GetAllProductsByProductGroupID(int id)
        {
            List<ProductDTO> dtos = container.GetAllProductsByProductGroupID(id);
            List<Product> products = new List<Product>();
            foreach (ProductDTO dto in dtos)
            {
                products.Add(new Product(dto));
            }
            return products;
        }

        public List<Product> FilterOnProducts(string Filter)
        {
            List<ProductDTO> dtos = container.FilterOnProducts(Filter);
            List<Product> products = new List<Product>();
            foreach (ProductDTO dto in dtos)
            {
                products.Add(new Product(dto));
            }
            return products;
        }
    }
}
