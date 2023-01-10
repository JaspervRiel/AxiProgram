using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InterfaceLib.DTO;

namespace BusnLogic
{
    public class UserLogin
    {
        public string name { get; set; }
        public string password { get; set; }
        public string token { get; set; }

        public UserLogin(UserLoginDTO userdto)
        {
            this.name = userdto.name;
            this.password = userdto.password;
            this.token = userdto.token;
        }
        
        public UserLogin(string name, string password, string token)
        {
            this.name = name;
            this.password = password;
            this.token = token;
        }
        
        public UserLogin()
        {

        }
        public UserLoginDTO convertToDTO()
        {
            return new UserLoginDTO(name, password, token); 
        }
    }
}
