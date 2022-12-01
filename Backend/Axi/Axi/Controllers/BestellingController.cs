using BusnLogic;
using DalMSSQL;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Axi.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class BestellingController : ControllerBase
    {
        private BestellingContainer bc;
        private readonly IConfiguration configuration;

        public BestellingController(IConfiguration ic)
        {
            configuration = ic;
            bc = new(new BestellingMSSQL(configuration["db:ConnectionString"]));
        }

        [HttpGet]
        [Route("api/[controller]Completed")]
        public string GetCompletedOrders()
        {
            List<Bestelling> bestelling = bc.GetCompletedBestelling();

            var json = JsonSerializer.Serialize(bestelling);
            return json;
        }

        [HttpGet]
        [Route("api/[controller]Active")]
        public string GetActiveOrders()
        {
            List<Bestelling> bestelling = bc.GetActiveBestelling();

            var json = JsonSerializer.Serialize(bestelling);
            return json;
        }
    }
}
