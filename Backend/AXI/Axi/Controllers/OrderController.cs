using BusnLogic;
using DalMSSQL;
using System;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using InterfaceLib.DTO;

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
            List<Order> orders = oc.GetOrders();

            var json = JsonSerializer.Serialize(orders);
            return json;
        }
    }
}
