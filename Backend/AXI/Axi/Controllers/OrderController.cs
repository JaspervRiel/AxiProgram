using BusnLogic;
using DalMSSQL;
using System;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Axi.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class OrderController : ControllerBase
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
            //List<Order> orders = oc.GetOrders();

            List<Order> orders = new();
            orders.Add(new Order(1, "Schroef", "A1"));
            orders.Add(new Order(2, "Schroef", "A1"));
            orders.Add(new Order(3, "Schroef", "A1"));

            var json = JsonSerializer.Serialize(orders);
            return json;
        }
    }
}
