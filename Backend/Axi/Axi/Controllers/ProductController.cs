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
            pc.Create(product);

            return null;
        }
    }
}
