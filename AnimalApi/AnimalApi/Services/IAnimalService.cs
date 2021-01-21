using AnimalApi.ViewModels;
using System.Collections.Generic;

namespace AnimalApi.Services
{
  public interface IAnimalService
  {
    List<AnimalModel> GetAnimals();
    AnimalModel GetAnimalById(int id);
    AnimalModel AddAnimal(AnimalModel animalModel);
    AnimalModel UpdateAnimal(AnimalModel animalModel);
    void DeleteAnimal(int id);
    bool IsValid(object value);
  }
}
