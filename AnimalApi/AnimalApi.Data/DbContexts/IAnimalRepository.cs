using AnimalApi.Data.Entities;
using System.Collections.Generic;

namespace AnimalApi.Data.DbContexts
{
  public interface IAnimalRepository
  {
        List<Animal> GetAnimals();
        Animal GetAnimalById(int id);
        Animal AddAnimal(Animal animal);
        Animal UpdateAnimal(Animal animal);
        void DeleteAnimal(int id);
  }
}