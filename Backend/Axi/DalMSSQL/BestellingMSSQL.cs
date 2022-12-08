using InterfaceLib;
using InterfaceLib.Container;
using InterfaceLib.DTO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DalMSSQL
{
    public class BestellingMSSQL : Database, IBestellingContainer
    {
        private readonly string connectionstring;
        private readonly Database connection;

        public BestellingMSSQL(string cs)
        {
            connectionstring = cs;
            connection = new Database(connectionstring);
        }

        public List<BestellingDTO> GetActiveBestelling()
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            List<BestellingDTO> BestList = new List<BestellingDTO>();
            DataTable dt = new();
            SqlDataAdapter da = new("SELECT * from [Bestelling] WHERE Completed = '0'", connectionstring);
            da.Fill(dt);
            foreach (DataRow dr in dt.Rows)
            {
                BestList.Add(new BestellingDTO(Convert.ToInt32(dr["ID"]), Convert.ToString(dr["Name"]), Convert.ToString(dr["OrderDate"])));
            }
            connection.Close();
            return BestList;
        }

        public List<BestellingDTO> GetCompletedBestelling()
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            List<BestellingDTO> BestList = new List<BestellingDTO>();
            DataTable dt = new();
            SqlDataAdapter da = new("SELECT * from [Bestelling] WHERE Completed = '1'", connectionstring);
            da.Fill(dt);
            foreach (DataRow dr in dt.Rows)
            {
                BestList.Add(new BestellingDTO(Convert.ToInt32(dr["ID"]), Convert.ToString(dr["Name"]), Convert.ToString(dr["OrderDate"])));
            }
            connection.Close();
            return BestList;
        }

        public List<ProductDTO> GetProductsFromBestelling(int id)
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            List<ProductDTO> lijst = new List<ProductDTO>();
            DataTable dt = new();
            SqlDataAdapter da = new("SELECT Product.*, BestelProduct.AantalProduct FROM Product JOIN BestelProduct on BestelProduct.ProductID = Product.ID WHERE BestellingID = '" + id + "'", connectionstring);
            da.Fill(dt);
            foreach (DataRow dr in dt.Rows)
            {
                lijst.Add(new ProductDTO(Convert.ToInt32(dr["ID"]), Convert.ToString(dr["Name"]), Convert.ToString(dr["Location"]), Convert.ToInt32(dr["AantalProduct"]), Convert.ToInt32(dr["ProductGroup"]), Convert.ToInt32(dr["BranchID"])));
            }
            connection.Close();
            return lijst;
        }

        public void Update(BestellingDTO bestelling)
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            SqlCommand command;
            string sql = "UPDATE [Order] SET " +
                "Completed = 1" +
                "WHERE ID = @ID";

            command = new SqlCommand(sql, connection);
            command.Parameters.AddWithValue("@ID", bestelling.Id);

            command.ExecuteNonQuery();
            connection.Close();
        }
    }
}
