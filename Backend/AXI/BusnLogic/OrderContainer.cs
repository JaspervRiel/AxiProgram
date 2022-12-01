using InterfaceLib;
using InterfaceLib.Container;
using InterfaceLib.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusnLogic
{
    public class OrderContainer
    {
        private readonly IOrderContainer container;

        public OrderContainer(IOrderContainer container)
        {
            this.container = container;
        }

        public List<Order> GetOrders()
        {
            List<OrderDTO> dtos = container.GetOrders();
            List<Order> orders = new List<Order>();
            foreach (OrderDTO dto in dtos)
            {
                orders.Add(new Order(dto));
            }
            return orders;
        }

        public List<Product> GetProductsFromOrder(int orderid)
        {
            List<ProductDTO> dtos = container.GetProductsFromOrder(orderid);
            List<Product> products = new List<Product>();
            foreach (ProductDTO dto in dtos)
            {
                products.Add(new Product(dto));
            }
            return products;
        }

        public List<Order> GetCompletedOrders()
        {
            List<OrderDTO> dtos = container.GetCompletedOrders();
            List<Order> orders = new List<Order>();
            foreach (OrderDTO dto in dtos)
            {
                orders.Add(new Order(dto));
            }
            return orders;
        }

        public List<Order> GetActiveOrders()
        {
            List<OrderDTO> dtos = container.GetActiveOrders();
            List<Order> orders = new List<Order>();
            foreach (OrderDTO dto in dtos)
            {
                orders.Add(new Order(dto));
            }
            return orders;
        }

        public void Create(Order o)
        {
            OrderDTO dto = o.GetDTO();
            container.Create(dto);
        }

        public void Delete(int ID)
        {
            container.Delete(ID);
        }

        public void Update(int id, string DateTime)
        {
            OrderDTO dto = new(id: id, completedDate: DateTime, orderDate: null);
            container.Update(dto);
        }

        public Order? GetOrderById(int id)
        {
            OrderDTO? dto = container.GetOrderById(id);
            return new Order(dto);
        }
    }
}
