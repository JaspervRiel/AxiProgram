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
        public List<BestellingDTO> GetCompletedBestelling();
        public List<BestellingDTO> GetActiveBestelling();
        public void UpdateComplete(BestellingDTO bestelling);

        public List<ProductDTO> GetProductsFromBestelling(int id);
    }
}
