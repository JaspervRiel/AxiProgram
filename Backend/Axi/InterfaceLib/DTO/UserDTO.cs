using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceLib.DTO
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Phonenumber { get; set; }
        public bool isManager { get; set; }


        public UserDTO(int id,string name, string email, string phonenumber, bool isManager, string password)
        {
            this.Id = id;
            this.Name = name;
            this.Email = email;
            this.Phonenumber = phonenumber;
            this.isManager = isManager;
            this.Password = password;
        }
    }
}
