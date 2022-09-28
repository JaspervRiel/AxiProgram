using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace DalMSSQL
{
    public class Database
    {
        private string connectiestring;
        SqlConnection cnn;
        SqlCommand command;
        SqlDataReader reader;

        private readonly string connect;

        /// <summary>
        /// Met deze constructor set ik de connectionstring
        /// </summary>
        /// <param name="cs"> De connectionstring </param>
        public Database(string cs)
        {
            connect = cs;
        }

        public Database()
        {
            connectiestring = "Server=mssqlstud.fhict.local;Database=dbi485146_AXI;User Id=dbi485146_AXI;Password=Welkom01;";
        }
        public void databaseconnection(string sql)
        {
            cnn = new SqlConnection(connectiestring);
            cnn.Close();
            cnn.Open();
            command = new SqlCommand(sql, cnn);
        }
    }
}
