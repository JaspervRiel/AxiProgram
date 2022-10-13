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

        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult CreateProduct(Product product)
        {
            pc.Create(product);

            return null;
        }


    }
}
