using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceLib.DTO
{
    public class UserLoginDTO
    {
        public string name { get; set; }
        public string password { get; set; }
        public string token { get; set; }
    
        public UserLoginDTO(string name,string password,string token)
        {
            this.name = name;
            this.password = password;
            this.token = token;
        }
    }
}
