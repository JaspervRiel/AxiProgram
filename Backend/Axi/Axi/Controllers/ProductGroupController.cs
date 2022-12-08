using BusnLogic;
using DalMSSQL;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Axi.Controllers
{
    [ApiController]
    [EnableCors]
    public class ProductGroupController : Controller
    {
        private ProductGroupContainer pc;
        private readonly IConfiguration configuration;

        public ProductGroupController(IConfiguration ic)
        {
            configuration = ic;
            pc = new(new ProductGroupMSSQL(configuration["db:ConnectionString"]));
        }

        [HttpGet]
        [Route("api/[controller]")]
        public string JsonConverter()
        {
            List<ProductGroup> products = pc.GetAllProductGroups();

            var json = JsonSerializer.Serialize(products);
            return json;
        }
    }
}
