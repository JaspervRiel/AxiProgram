using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InterfaceLib.Container;
using InterfaceLib.DTO;

namespace BusnLogic
{
    public class UserContainer
    {
        public readonly iUsers iUsers;

        public UserContainer(iUsers iuser)
        {
            iUsers = iuser;
        }

        List<User> GetAllUsers()
        {

            List<UserDTO> usersDTOS = iUsers.GetAllUsers();
            List<User> Users = new List<User>();
            foreach (UserDTO userDTO in usersDTOS)
            {
                Users.Add(new User(userDTO));
            }
            return Users;
        }

        User Getbyid(int id)
        {
            UserDTO userdto = iUsers.GetById(id);
            User user = new User(userdto);
            return user;
        }

        List<User> getAllManagers()
        {
            List<UserDTO>userdtos = iUsers .GetAllManagers();
            List<User> users = new List<User>();
            foreach (UserDTO userDTO in userdtos)
            {
                users.Add(new User(userDTO));
            }
            return users;

        }

        void createUser(User user)
        {
            UserDTO userDTO = user.getDTO();
            iUsers.CreateUser(userDTO);
        }
        void deleteUser(User user)
        {
           iUsers.DeleteUser(user.id)
        }

    }
}
