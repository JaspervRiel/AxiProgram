﻿using InterfaceLib;
using InterfaceLib.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusnLogic
{
    public class Order
    {
        private int Id { get; set; }
        private DateTime OrderDate { get; set; }
        private DateTime? CompletedDate { get; set; }
        private List<Product> Products { get; set; } = new List<Product>();

        public Order(int id, DateTime orderDate, DateTime completedDate)
        {
            Id = id;
            OrderDate = orderDate;
            CompletedDate = completedDate;
        }

        public Order(OrderDTO dto)
        {
            this.Id = dto.Id;
            this.OrderDate = dto.OrderDate;
            this.CompletedDate = dto.CompletedDate;
        }

        public Order()
        {

        }

        public OrderDTO GetDTO()
        {
            OrderDTO dto = new OrderDTO(Id, OrderDate, CompletedDate);
            return dto;
        }

        public override string? ToString()
        {
            return $"Id: {Id} OrderDate: {OrderDate}";
        }
    }
}
