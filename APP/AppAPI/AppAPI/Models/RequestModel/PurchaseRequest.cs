﻿using System.ComponentModel.DataAnnotations;

namespace AppAPI.Models.RequestModel
{
    public class Purchaserequest
    {
        [Required]
        public Guid ProductId { get; set; }

        [Required]
        public Guid BuyerId { get; set; }

        [Required]
        public int Quantity { get; set; }

    }
}