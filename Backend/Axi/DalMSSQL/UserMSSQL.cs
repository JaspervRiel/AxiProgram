using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InterfaceLib;
using InterfaceLib.Container;
using InterfaceLib.DTO;

namespace DalMSSQL
{
    public class UserMSSQL : Database,iUsers
    {
        private readonly string connectiestring;
        private readonly Database database;


        public UserMSSQL(string cs)
        {
            this.connectiestring = cs;
            this.database = new Database(connectiestring);
        }

        public int CheckCredentials(string username, string password)
        {
            SqlConnection connection = new SqlConnection(connectiestring);
            connection.Open();
            string sql = "SELECT Id FROM Users WHERE Naam = '" + username + "' AND Password = '" +password+"'" ;
            SqlCommand cmd = new SqlCommand(sql, connection);
            SqlDataReader reader = cmd.ExecuteReader();
            reader.Read();
            int id =reader.GetInt32("ID");
            connection.Close();
            return id;
        }

        public void CreateUser(UserDTO userDTO)
        {
            SqlConnection connection = new SqlConnection(connectiestring);
            connection.Open();
            SqlCommand command;
            string sql = "INSERT INTO Users(Naam, Password, Email, Telefoonnummer, isManager) VALUES(" +
                "@Naam," +
                "@Password,"+
                "@Email," +
                "@Telefoonnummer," +
                "@Ismanager)";

            command = new SqlCommand(sql, connection);
            command.Parameters.AddWithValue("@Naam", userDTO.Name);
            command.Parameters.AddWithValue("@Password", userDTO.Password);
            command.Parameters.AddWithValue("@Email", userDTO.Email);
            command.Parameters.AddWithValue("@Telefoonnummer", userDTO.Phonenumber);
            if(userDTO.isManager == true)
            {
                command.Parameters.AddWithValue("@IsManager", 1);

            }
            else{
                command.Parameters.AddWithValue("@IsManager", 0);
            }
            command.ExecuteNonQuery();
            connection.Close();
        }

        public void DeleteUser(int id)
        {
            SqlConnection connection = new SqlConnection(connectiestring);
            connection.Open();
            SqlCommand command;
            string sql = "DELETE FROM Users WHERE ID = @ID";

            command = new SqlCommand(sql, connection);

            command.Parameters.AddWithValue("@Id", id);
            command.ExecuteNonQuery();
            connection.Close();
        }

        public List<UserDTO> GetAllManagers()
        {
            SqlConnection connection = new SqlConnection(connectiestring);
            connection.Open();
            List<UserDTO> lijst = new List<UserDTO>();
            DataTable dt = new();
            SqlDataAdapter da = new("SELECT * FROM Users WHERE Users.isManager = 1", connectiestring);
            da.Fill(dt);
            foreach (DataRow dr in dt.Rows)
            {
                lijst.Add(new UserDTO(Convert.ToInt32(dr["Id"]), Convert.ToString(dr["Naam"]), Convert.ToString(dr["Email"]), Convert.ToString(dr["Telefoonnummer"]), Convert.ToBoolean(dr["isManager"]), Convert.ToString(dr["Password"])));
            }
            connection.Close();
            return lijst;
        }

        public List<UserDTO> GetAllUsers()
        {
            SqlConnection connection = new SqlConnection(connectiestring);
            connection.Open();
            List<UserDTO> lijst = new List<UserDTO>();
            DataTable dt = new();
            SqlDataAdapter da = new("SELECT * FROM Users", connectiestring);
            da.Fill(dt);
            foreach (DataRow dr in dt.Rows)
            {
                lijst.Add(new UserDTO(Convert.ToInt32(dr["Id"]), Convert.ToString(dr["Naam"]), Convert.ToString(dr["Email"]), Convert.ToString(dr["Telefoonnummer"]), Convert.ToBoolean(dr["isManager"]), Convert.ToString(dr["Password"])));
            }
            connection.Close();
            return lijst;
        }

        public UserDTO GetById(int id)
        {
            SqlConnection connection = new SqlConnection(connectiestring);
            connection.Open();
            string sql = "SELECT * FROM Users WHERE ID = '" + id + "'";
            SqlCommand cmd = new SqlCommand(sql, connection);
            SqlDataReader reader = cmd.ExecuteReader();
            reader.Read();
            UserDTO userDTO = new UserDTO(reader.GetInt32("ID"), reader.GetString("Naam"), reader.GetString("Email"), reader.GetString("Telefoonnummer"), reader.GetBoolean("isManager"),reader.GetString("Password"));
            connection.Close();
            return userDTO;        
        }
    }
}
