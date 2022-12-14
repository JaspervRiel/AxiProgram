using InterfaceLib.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusnLogic
{
    public class ProductGroup
    {
        public int Id { get; set; }
        public string ProductGroupName { get; set; }

        public ProductGroup(int id, string productGroupName)
        {
            Id = id;
            ProductGroupName = productGroupName;
        }

        public ProductGroup()
        {

        }

        public ProductGroupDTO GetDTO()
        {
            ProductGroupDTO dto = new ProductGroupDTO(Id, ProductGroupName);
            return dto;
        }

        public ProductGroup(ProductGroupDTO dto)
        {
            Id=dto.Id;
            ProductGroupName = dto.ProductGroupName;
        }
    }
}
