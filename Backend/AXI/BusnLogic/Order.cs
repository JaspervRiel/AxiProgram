using InterfaceLib;
using InterfaceLib.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusnLogic
{
    public class Order
    {
        public int Id { get; set; }
        public string OrderDate { get; set; }
        public string CompletedDate { get; set; }
        public List<Product> Products { get; set; } = new List<Product>();

        public Order(int id, string orderDate, string completedDate)
        {
            Id = id;
            OrderDate = orderDate;
            CompletedDate = completedDate;
        }

        public Order(OrderDTO dto)
        {
            this.Id = dto.Id;
            this.OrderDate = dto.OrderDate;
            this.CompletedDate = dto.CompletedDate;
        }

        public Order()
        {

        }

        public OrderDTO GetDTO()
        {
            OrderDTO dto = new OrderDTO(Id, OrderDate, CompletedDate);
            return dto;
        }


    }
}
