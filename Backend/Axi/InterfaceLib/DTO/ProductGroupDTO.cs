using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceLib.DTO
{
    public class ProductGroupDTO
    {
        public int Id { get; set; }
        public string ProductGroupName { get; set; }

        public ProductGroupDTO(int id, string productGroupName)
        {
            Id = id;
            ProductGroupName = productGroupName;
        }

        public ProductGroupDTO()
        {

        }
    }
}
