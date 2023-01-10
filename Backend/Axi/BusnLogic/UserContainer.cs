using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using InterfaceLib.Container;
using InterfaceLib.DTO;

namespace BusnLogic
{
    public class UserContainer
    {
        public readonly iUsers iUsers;

        public string hashpassword(string password)
        {
            var sha = SHA256.Create();
            var asByteArray = Encoding.Default.GetBytes(password);
            var hashedpassword = sha.ComputeHash(asByteArray);
            return Convert.ToBase64String(hashedpassword);
        }
        
        
        public UserContainer(iUsers iuser)
        {
            iUsers = iuser;
        }

        public List<User> GetAllUsers()
        {

            List<UserDTO> usersDTOS = iUsers.GetAllUsers();
            List<User> Users = new List<User>();
            foreach (UserDTO userDTO in usersDTOS)
            {
                Users.Add(new User(userDTO));
            }
            return Users;
        }

        public User Getbyid(int id)
        {
            UserDTO userdto = iUsers.GetById(id);
            User user = new User(userdto);
            return user;
        }

        public List<User> getAllManagers()
        {
            List<UserDTO>userdtos = iUsers .GetAllManagers();
            List<User> users = new List<User>();
            foreach (UserDTO userDTO in userdtos)
            {
                users.Add(new User(userDTO));
            }
            return users;

        }

        public void createUser(User user)
        {
            UserDTO userDTO = user.getDTO();
            userDTO.Password = hashpassword(userDTO.Password);
            iUsers.CreateUser(userDTO);
        }
        public void deleteUser(User user)
        {
            iUsers.DeleteUser(user.id);
        }

        public UserLogin getByCredentials(string username, string password)
        {
            string hashedpassword = hashpassword(password);
            return new UserLogin(iUsers.CheckCredentials(username, hashedpassword));
        }
        public bool CheckAdmin(string token)
        {
            return iUsers.checkAdmin(token);
        }

    }
}
