using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceLib
{
    public interface IProductContainer
    {
        public List<ProductDTO> Getproducts();
        public void Create(ProductDTO product);
        public void Delete(int id);
        public void Update(ProductDTO product);
        public ProductDTO GetProductById(int id);
    }
}
