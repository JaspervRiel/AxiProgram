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
        public IActionResult DeleteProduct(Product product)
        {
            try
            {
                pc.Delete(product.Id);
                return Ok(product.Id);
            }
            catch
            {
                return Unauthorized();
            }
        }

        [HttpPatch]
        [Route("api/[controller]")]
        public IActionResult UpdateProduct(Product product)
        {
            try
            {
                pc.Update(product);
                return Ok(product);
            }
            catch
            {
                return Unauthorized();
            }
        }

        [HttpGet]
        [Route("api/[controller]/productgroup")]
        public string GetProductsByProductGroupID(int ID)
        {
            List<Product> products = pc.GetAllProductsByProductGroupID(ID);

            var json = JsonSerializer.Serialize(products);
            return json;
        }

        [HttpGet]
        [Route("api/[controller]/searchbar")]
        public string FilterOnProducts(string Filter)
        {
            List<Product> products = pc.FilterOnProducts(Filter);
            var json = JsonSerializer.Serialize(products);
            return json;
        }
    }
}
