using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using BusnLogic;
using DalMSSQL;
using System.Collections.Generic;
using System.Text.Json;

namespace Axi.Controllers
{
    [ApiController]
    [EnableCors]
    public class UsersController : ControllerBase
    {

        private UserContainer us;
        private readonly IConfiguration configuration;

        public UsersController(IConfiguration ic)
        {
            configuration = ic;
            us = new(new UserMSSQL(configuration["db:ConnectionString"]));
        }

        [HttpGet]
        [Route("api/[controller]")]
        public string getUsers()
        {
            List<User> users= us.GetAllUsers();
            var json =JsonSerializer.Serialize(users);
            return json;

        }

        [HttpGet]
        [Route("api/GetUserByID")]
        public string getUserByID(int id)
        {
            User user = us.Getbyid(id);
            var json = JsonSerializer.Serialize(user);
            return json;
        }

        [HttpGet]
        [Route("api/GetAllManagers")]
        public string getAllManagers()
        {
            List<User> users = us.getAllManagers();
            var json = JsonSerializer.Serialize(users);
            return json;
        }

        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult createUser(User user)
        {
            try
            {
                us.createUser(user);
                return Ok(user);
            }
            catch
            {
                return Unauthorized();
            }
        }


        [HttpDelete]
        [Route("api/DeleteUser")]
        public IActionResult DeleteUser(User user)
        {
            try
            {
                us.deleteUser(user);
                return Ok(user);
            }
            catch
            {
                return Unauthorized();
            }
        }
        [HttpGet]
        [Route("api/CheckCredentials")]
        public int CheckCredentails(string username, string password)
        {
            try
            {

                return us.getByCredentials(username, password);
            }
            catch
            {
                throw new Exception();
            }
        }
    }
}
