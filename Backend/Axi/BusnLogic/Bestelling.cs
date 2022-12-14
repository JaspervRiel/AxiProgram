using InterfaceLib.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusnLogic
{
    public class Bestelling
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string OrderDate { get; set; }
        public List<Product> Products { get; set; } = new List<Product>();

        public Bestelling(int id, string name, string orderDate)
        {
            Id = id;
            Name = name;
            OrderDate = orderDate;
        }

        public Bestelling(BestellingDTO dto)
        {
            this.Id = dto.Id;
            this.Name = dto.Name;
            this.OrderDate = dto.OrderDate;
        }

        public Bestelling()
        {

        }

        public BestellingDTO GetDTO()
        {
            BestellingDTO dto = new BestellingDTO(Id, Name, OrderDate);
            return dto;
        }
    }
}
