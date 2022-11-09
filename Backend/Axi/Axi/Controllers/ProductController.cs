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
    public class ProductController : ControllerBase
    {
        private ProductContainer pc;
        private readonly IConfiguration configuration;

        public ProductController(IConfiguration ic)
        {
            configuration = ic;
            pc = new(new ProductMSSQL(configuration["db:ConnectionString"]));
        }

        [HttpGet]
        [Route("api/[controller]")]
        public string JsonConverter()
        {
            List<Product> products = pc.Getproducts();

            var json = JsonSerializer.Serialize(products);
            return json;
        }

        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult CreateProduct(Product product)
        {
            try
            {
                pc.Create(product);
                return Ok(product);
            }
            catch
            {
                return Unauthorized();
            }
        }

        [HttpDelete]
        [Route("api/[controller]")]
        public IActionResult DeleteProduct(int ID)
        {
            try
            {
                pc.Delete(ID);
                return Ok(ID);
            }
            catch
            {
                return Unauthorized();
            }
        }
    }
}
