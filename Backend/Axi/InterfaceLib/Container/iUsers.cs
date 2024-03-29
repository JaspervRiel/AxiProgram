﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InterfaceLib.DTO;

namespace InterfaceLib.Container
{
    public interface iUsers
    {
        List<UserDTO> GetAllUsers();
        UserDTO GetById(int id);

        List<UserDTO> GetAllManagers();

        void CreateUser(UserDTO userDTO);
        void DeleteUser(int id);

        UserLoginDTO CheckCredentials(string username, string password);

        bool checkAdmin(string token);
    }
}
