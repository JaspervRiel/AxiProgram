using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InterfaceLib.DTO;

namespace BusnLogic
{
    public class User
    {
        public int id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phonenumber { get; set; }
        public bool isManager { get; set; }

        public User() { }

        public User(int id, string name, string email, string phonenumber, bool isManager)
        {
            this.id = id;
            this.Name = name;
            this.Email = email;
            this.Phonenumber = phonenumber;
            this.isManager = isManager;
        }
        public User(UserDTO userdto)
        {
            this.id = userdto.Id;
            this.Name = userdto.Name;
            this.Email = userdto.Email;
            this.Phonenumber = userdto.Phonenumber;
            this.isManager = userdto.isManager;
        }

        public UserDTO getDTO()
        {
            UserDTO userdto = new UserDTO(id,Name, Email, Phonenumber, isManager);
            return userdto;
        }
    }
}
