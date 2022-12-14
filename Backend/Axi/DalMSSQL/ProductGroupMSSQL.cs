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
    public class ProductGroupMSSQL : Database, IProductGroupContainer
    {
        private readonly string connectionstring;
        private readonly Database connection;

        public ProductGroupMSSQL(string cs)
        {
            connectionstring = cs;
            connection = new Database(connectionstring);
        }
        public List<ProductGroupDTO> GetAllProductGroups()
        {
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            List<ProductGroupDTO> lijst = new List<ProductGroupDTO>();
            DataTable dt = new();
            SqlDataAdapter da = new("SELECT * FROM ProductGroup", connectionstring);
            da.Fill(dt);
            foreach (DataRow dr in dt.Rows)
            {
                lijst.Add(new ProductGroupDTO(Convert.ToInt32(dr["ID"]), Convert.ToString(dr["ProductGroupName"])));
            }
            connection.Close();
            return lijst;
        }
    }
}
