using BusnLogic;
using System.Data;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using DalMSSQL;
using InterfaceLib;

namespace AXITests
{
    [TestClass]
    public class ProductTest
    {
        [TestMethod]
        public void TestGetProducts()
        {
            ProductMSSQL testproduct = new ProductMSSQL("Server=mssqlstud.fhict.local;Database=dbi485146_AXI;User Id=dbi485146_AXI;Password=Welkom01;");

            //Arrange
            Product p1 = new Product(1, "Schroef", "A1", 34, 5, 5);
            Product p2 = new Product(2, "Bout", "A2", 2, 2, 2);
            Product p3 = new Product(3, "Plug", "A3", 23, 3, 3);
            List<Product> products = new();
            products.Add(p1);
            products.Add(p2);
            products.Add(p3);

            //Act
            
            List<ProductDTO> products2 = testproduct.Getproducts();
            List<Product> newproducts = new();

            foreach (ProductDTO product in products2)
            {
                Product newproduct = new Product(product);
                newproducts.Add(newproduct);
            }
            

            //Assert
            Assert.AreEqual(products[0].Name, newproducts[0].Name);
        }
    }
}