using InterfaceLib.Container;
using InterfaceLib.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusnLogic
{
    public class BestellingContainer
    {
        private readonly IBestellingContainer container;

        public BestellingContainer(IBestellingContainer container)
        {
            this.container = container;
        }

        public List<Bestelling> GetCompletedBestelling()
        {
            List<BestellingDTO> dtos = container.GetCompletedOrders();
            List<Bestelling> bestellings = new List<Bestelling>();
            foreach (BestellingDTO dto in dtos)
            {
                bestellings.Add(new Bestelling(dto));
            }
            return bestellings;
        }

        public List<Bestelling> GetActiveBestelling()
        {
            List<BestellingDTO> dtos = container.GetActiveOrders();
            List<Bestelling> bestellings = new List<Bestelling>();
            foreach (BestellingDTO dto in dtos)
            {
                bestellings.Add(new Bestelling(dto));
            }
            return bestellings;
        }
        public void Update(Bestelling b)
        {
            BestellingDTO dto = b.GetDTO();
            container.Update(dto);
        }


    }
}
