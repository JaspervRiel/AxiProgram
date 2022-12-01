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

        [HttpGet]
        [Route("api/[controller]Delete")]
        public IActionResult OrderDelete(int id)
        {
            try
            {
                oc.Delete(id);
                return Ok(id);
            }
            catch
            {
                return Unauthorized();
            }

        }


        [HttpPatch]
        [Route("api/[controller]Update")]
        public IActionResult UpdateOrder(int id, string DateTime)
        {
            try
            {
                oc.Update(id, DateTime);
                return Ok(id);
            }
            catch
            {
                return Unauthorized();
            }
        }

        [HttpGet]
        [Route("api/[controller]CompletedOrders")]
        public string GetCompletedOrders()
        {
            List<Order> orders = oc.GetCompletedOrders();

            var json = JsonSerializer.Serialize(orders);
            return json;
        }

        [HttpGet]
        [Route("api/[controller]ActiveOrders")]
        public string GetActiveOrders()
        {
            List<Order> orders = oc.GetActiveOrders();

            var json = JsonSerializer.Serialize(orders);
            return json;
        }

        [HttpGet]
        [Route("api/[controller]GetOrderProducts")]
        public string GetOrderProducts(int orderID)
        {
            List<Product> products = oc.GetProductsFromOrder(orderID);

            var json = JsonSerializer.Serialize(products);
            return json;
        }
    }
}
