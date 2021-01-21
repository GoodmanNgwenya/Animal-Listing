using AnimalApi.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace AnimalApi.Data.Configuration
{
  public class AnimalConfiguration : IEntityTypeConfiguration<Animal>
  {
    public void Configure(EntityTypeBuilder<Animal> builder)
    {
      builder.ToTable("Animals");
      builder.HasData(
        new Animal
        {
          Id = 1,
          AnimalName="Dog",
          Type="Pets"
        },
         new Animal
         {
           Id = 2,
           AnimalName = "Cat",
           Type = "Pets"
         },
          new Animal
          {
            Id = 3,
            AnimalName = "Cow",
            Type = "Farm Animal"
          });
    }
  }
}
