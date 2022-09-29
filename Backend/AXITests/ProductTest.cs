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
        public void TestGetProductsFirstProductAndCount()
        {
            ProductMSSQL testproduct = new ProductMSSQL("Server=mssqlstud.fhict.local;Database=dbi485146_AXI;User Id=dbi485146_AXI;Password=Welkom01;");

            //Arrange
            Product p1 = new Product(1, "Schroef", "A1", 34, 1, 5);
            Product p2 = new Product(2, "Bout", "A2", 2, 1, 2);
            Product p3 = new Product(3, "Plug", "A3", 23, 1, 3);
            Product p4 = new Product(4, "Boor", "A4", 12, 1, 5);
            List<Product> products = new();
            products.Add(p1);
            products.Add(p2);
            products.Add(p3);
            products.Add(p4);

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
            Assert.AreEqual(products.Count, newproducts.Count);
        }

/*        [TestMethod]
        public void TestCreateUser()
        {
            ProductMSSQL testproduct = new ProductMSSQL("Server=mssqlstud.fhict.local;Database=dbi485146_AXI;User Id=dbi485146_AXI;Password=Welkom01;");

            //Arrange
            Product p1 = new Product(1, "Schroef", "A1", 34, 5, 5);

            //Act
            Product CreatedProduct = new Product(testproduct.Create(new ProductDTO(2, "Boor", "A2", 12, 5, 5)));

            //Assert
            Assert.AreEqual(p1.ProductGroup, CreatedProduct.ProductGroup);
        }*/

        [TestMethod]
        public void TestGetProductById()
        {
            ProductMSSQL testproduct = new ProductMSSQL("Server=mssqlstud.fhict.local;Database=dbi485146_AXI;User Id=dbi485146_AXI;Password=Welkom01;");
            //Arrange
            Product p1 = new Product(1, "Schroef", "A1", 34, 1, 5);

            //Act
            Product searchedProduct = new Product(testproduct.GetProductById(1));

            //Assert
            Assert.AreEqual(p1.Name, searchedProduct.Name);
        }
    }
}