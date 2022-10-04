using InterfaceLib;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Axi.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        [Route("api/[controller]")]
        public string JsonConverter()
        {
            List<ProductDTO> products = new();
            products.Add(new ProductDTO(1, "Schroef", "A1", 34, 1, 5));
            products.Add(new ProductDTO(2, "Schroef", "A1", 34, 1, 5));
            products.Add(new ProductDTO(3, "Schroef", "A1", 34, 1, 5));
            var json = JsonSerializer.Serialize(products);
            return json;
        }
    }
}
