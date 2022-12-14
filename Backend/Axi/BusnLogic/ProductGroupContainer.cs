using InterfaceLib.Container;
using InterfaceLib.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusnLogic
{
    public class ProductGroupContainer
    {
        private readonly IProductGroupContainer container;

        public ProductGroupContainer(IProductGroupContainer container)
        {
            this.container = container;
        }

        public List<ProductGroup> GetAllProductGroups()
        {
            List<ProductGroupDTO> dtos = container.GetAllProductGroups();
            List<ProductGroup> productgroups = new List<ProductGroup>();
            foreach (ProductGroupDTO dto in dtos)
            {
                productgroups.Add(new ProductGroup(dto));
            }
            return productgroups;
        }
    }
}
