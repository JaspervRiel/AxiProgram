using BusnLogic;
using DalMSSQL;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Axi.Controllers
{
    public class OrderController : Controller
    {
        private OrderContainer oc;
        private readonly IConfiguration configuration;

        public OrderController(IConfiguration ic)
        {
            configuration = ic;
            oc = new(new OrderMSSQL(configuration["db:ConnectionString"]));
        }

        [HttpGet]
        [Route("api/[controller]")]
        public string JsonConverter()
        {
            List<Order> orders = oc.GetOrders();
            var json = JsonSerializer.Serialize(orders);
            return json;
        }

    }
}
