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
    public class OrderMSSQL : Database, IOrderContainer
    {
        private readonly string connectionstring;
        private readonly Database connection;

        public OrderMSSQL(string cs)
        {
            connectionstring = cs;
            connection = new Database(connectionstring);
        }

        public List<OrderDTO> GetOrders()
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            List<OrderDTO> lijst = new List<OrderDTO>();
            DataTable dt = new();
            SqlDataAdapter da = new("SELECT * from [Order]", connectionstring);
            da.Fill(dt);
            foreach (DataRow dr in dt.Rows)
            {
                lijst.Add(new OrderDTO(Convert.ToInt32(dr["ID"]), Convert.ToString(dr["OrderDate"]), Convert.ToString(dr["CompletedDate"])));
            }
            connection.Close();
            return lijst;
        }

        public List<OrderDTO> GetCompletedOrders()
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            List<OrderDTO> lijst = new List<OrderDTO>();
            DataTable dt = new();
            SqlDataAdapter da = new("SELECT * from [Order] WHERE CompletedDate IS NOT NULL", connectionstring);
            da.Fill(dt);
            foreach (DataRow dr in dt.Rows)
            {
                lijst.Add(new OrderDTO(Convert.ToInt32(dr["ID"]), Convert.ToString(dr["OrderDate"]), Convert.ToString(dr["CompletedDate"])));
            }
            connection.Close();
            return lijst;
        }

        public List<OrderDTO> GetActiveOrders()
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            List<OrderDTO> lijst = new List<OrderDTO>();
            DataTable dt = new();
            SqlDataAdapter da = new("SELECT * from [Order] WHERE CompletedDate IS NULL", connectionstring);
            da.Fill(dt);
            foreach (DataRow dr in dt.Rows)
            {
                lijst.Add(new OrderDTO(Convert.ToInt32(dr["ID"]), Convert.ToString(dr["OrderDate"]), Convert.ToString(dr["CompletedDate"])));
            }
            connection.Close();
            return lijst;
        }

        public void Create(OrderDTO order)
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            SqlCommand command;
            string sql = "INSERT INTO [Order](ID, OrderDate, CompletedDate) VALUES(" +
                "@ID," +
                "@OrderDate," +
                "@CompletedDate";

            command = new SqlCommand(sql, connection);
            command.Parameters.AddWithValue("@ID", order.Id);
            command.Parameters.AddWithValue("@OrderDate", order.OrderDate);
            command.Parameters.AddWithValue("@CompletedDate", order.CompletedDate);
            command.ExecuteNonQuery();
            connection.Close();
        }

        public void Delete(int id)
        {
            DeleteProductsFromOrder(id);
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            SqlCommand command;
            string sql = "DELETE FROM [Order] WHERE ID = @ID";

            command = new SqlCommand(sql, connection);

            command.Parameters.AddWithValue("@ID", id);
            command.ExecuteNonQuery();
            connection.Close();
        }

        private void DeleteProductsFromOrder(int id)
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            SqlCommand command;
            string sql = "DELETE FROM ProductOrder WHERE ProductOrder.OrderID = @ID";

            command = new SqlCommand(sql, connection);

            command.Parameters.AddWithValue("@ID", id);
            command.ExecuteNonQuery();
            connection.Close();
        }

        public void Update(OrderDTO order)
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            SqlCommand command;
            string sql = "UPDATE [Order] SET " +
                "CompletedDate = @CompletedDate " +
                "WHERE ID = @ID";

            command = new SqlCommand(sql, connection);
            command.Parameters.AddWithValue("@ID", order.Id);
            command.Parameters.AddWithValue("@CompletedDate", order.CompletedDate);
            command.ExecuteNonQuery();
            connection.Close();
        }

        public OrderDTO GetOrderById(int id)
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            string sql = "SELECT * FROM Order WHERE ID = '" + id + "'";
            SqlCommand cmd = new SqlCommand(sql, connection);
            SqlDataReader reader = cmd.ExecuteReader();
            reader.Read();
            connection.Close();
            return new OrderDTO(reader.GetInt32("ID"), reader.GetString("OrderDate"), reader.GetString("CompletedDate"));
        }

        public List<ProductDTO> GetProductsFromOrder(int id)
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            List<ProductDTO> lijst = new List<ProductDTO>();
            DataTable dt = new();
            SqlDataAdapter da = new("SELECT Product.*, ProductOrder.AantalProducten FROM Product JOIN ProductOrder on ProductOrder.ProductID = Product.ID WHERE OrderId = '" + id + "'", connectionstring);
            da.Fill(dt);
            foreach (DataRow dr in dt.Rows)
            {
                lijst.Add(new ProductDTO(Convert.ToInt32(dr["ID"]), Convert.ToString(dr["Name"]), Convert.ToString(dr["Location"]), Convert.ToInt32(dr["Stock"]), Convert.ToInt32(dr["ProductGroup"]), Convert.ToInt32(dr["BranchID"]), Convert.ToInt32(dr["AantalProducten"])));
            }
            connection.Close();
            return lijst;
        }
    }
}
