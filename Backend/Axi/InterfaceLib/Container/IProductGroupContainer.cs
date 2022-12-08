using InterfaceLib.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceLib.Container
{
    public interface IProductGroupContainer
    {
        public List<ProductGroupDTO> GetAllProductGroups();
    }
}
