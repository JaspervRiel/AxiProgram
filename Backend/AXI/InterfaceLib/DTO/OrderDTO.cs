using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceLib.DTO
{
    public class OrderDTO
    {
        public int Id { get; set; }
        public string OrderDate { get; set; }
        public string? CompletedDate { get; set; }
        public List<ProductDTO> Products { get; set; } = new List<ProductDTO>();

        public OrderDTO(int id, string orderDate, string? completedDate)
        {
            Id = id;
            OrderDate = orderDate;
            CompletedDate = completedDate;
        }
        public OrderDTO()
        {
            
        }
    }
}
