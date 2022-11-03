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
        public DateTime OrderDate { get; set; }
        public DateTime? CompletedDate { get; set; }
        public List<ProductDTO> Products { get; set; } = new List<ProductDTO>();

        public OrderDTO(int id, DateTime orderDate, DateTime? completedDate)
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
