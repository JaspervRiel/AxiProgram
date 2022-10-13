using InterfaceLib.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceLib.Container
{
    public interface IOrderContainer
    {
        public List<OrderDTO> GetOrders();
        public void Create(OrderDTO order);
        public void Delete(int id);
        public void Update(OrderDTO order);
        public OrderDTO GetOrderById(int id);
    }
}
