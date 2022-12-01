using InterfaceLib.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceLib.Container
{
    public interface IBestellingContainer
    {
        public List<BestellingDTO> GetCompletedOrders();
        public List<BestellingDTO> GetActiveOrders();
        public List<ProductDTO> GetProductsFromOrder(int id);
    }
}
