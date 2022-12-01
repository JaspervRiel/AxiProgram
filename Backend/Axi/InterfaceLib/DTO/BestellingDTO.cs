using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceLib.DTO
{
    public class BestellingDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string OrderDate { get; set; }
        public List<ProductDTO> Products { get; set; } = new List<ProductDTO>();


        public BestellingDTO(int id, string name, string orderDate)
        {
            this.Id = id;
            this.Name = name;
            this.OrderDate = orderDate;
        }
        public BestellingDTO()
        {

        }
    }
}
