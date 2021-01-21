using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AnimalApi.ViewModels
{
  public class AnimalModel
  {
    public int Id { get; set; }
    [Required]
    public string AnimalName { get; set; }
    [Required]
    public string Type { get; set; }
  }
}
