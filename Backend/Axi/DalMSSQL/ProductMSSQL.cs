using InterfaceLib;
using System.Data;
using System.Data.SqlClient;

namespace DalMSSQL
{
    public class ProductMSSQL : Database, IProductContainer
    {
        private readonly string connectionstring;
        private readonly Database connection;

        public ProductMSSQL(string cs)
        {
            connectionstring = cs;
            connection = new Database(connectionstring);
        }

        //GetAll
        public List<ProductDTO> Getproducts()
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            List<ProductDTO> lijst = new List<ProductDTO>();
            DataTable dt = new();
            SqlDataAdapter da = new("SELECT * from Product", connectionstring);
            da.Fill(dt);
            foreach (DataRow dr in dt.Rows)
            {
                lijst.Add(new ProductDTO(Convert.ToInt32(dr["ID"]), Convert.ToString(dr["Name"]), Convert.ToString(dr["Location"]), Convert.ToInt32(dr["Stock"]), Convert.ToInt32(dr["ProductGroup"]), Convert.ToInt32(dr["BranchID"])));
            }
            connection.Close();
            return lijst;
        }
        public void Create(ProductDTO product)
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            SqlCommand command;
            string sql = "INSERT INTO Product(Name, Location, Stock, ProductGroup, BranchID) VALUES(" +
                "@Name," +
                "@Location," +
                "@Stock," +
                "@ProductGroup," +
                "@BranchID)";

            command = new SqlCommand(sql, connection);
            command.Parameters.AddWithValue("@Name", product.Name);
            command.Parameters.AddWithValue("@Location", product.Location);
            command.Parameters.AddWithValue("@Stock", product.Stock);
            command.Parameters.AddWithValue("@ProductGroup", product.ProductGroup);
            command.Parameters.AddWithValue("@BranchID", product.BranchID);
            command.ExecuteNonQuery();
        }
        public void Delete(int id)
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            SqlCommand command;
            string sql = "DELETE FROM Groepen WHERE ID = @ID";

            command = new SqlCommand(sql, connection);

            command.Parameters.AddWithValue("@ID", id);
            connection.Close();
            command.ExecuteNonQuery();
        }
        public void Update(ProductDTO product)
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            SqlCommand command;
            string sql = "Update Product SET " +
                "Name = @Name," +
                "Location = @Location," +
                "Stock = @Stock," +
                "ProductGroup = @ProductGroup," +
                "BranchID = @BranchID)";

            command = new SqlCommand(sql, connection);
            command.Parameters.AddWithValue("@Naam", product.Name);
            command.Parameters.AddWithValue("@Location", product.Location);
            command.Parameters.AddWithValue("@Stock", product.Stock);
            command.Parameters.AddWithValue("@ProductGroup", product.ProductGroup);
            command.Parameters.AddWithValue("@BranchID", product.BranchID);
            command.ExecuteNonQuery();
        }
        public ProductDTO GetProductById(int id)
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            string sql = "SELECT * FROM Product WHERE ID = '" + id + "'";
            SqlCommand cmd = new SqlCommand(sql, connection);
            SqlDataReader reader = cmd.ExecuteReader();
            reader.Read();
            return new ProductDTO(reader.GetInt32("ID"), reader.GetString("Name"), reader.GetString("Location"), reader.GetInt32("Stock"), reader.GetInt32("ProductGroup"), reader.GetInt32("BranchID"));
        }
    }
}