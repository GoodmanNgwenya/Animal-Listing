using AnimalApi.Data.DbContexts;
using AnimalApi.Data.Entities;
using AnimalApi.ViewModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AnimalApi.Services
{
  public class AnimalService:IAnimalService
  {
    private IAnimalRepository _repo;
    public AnimalService(IAnimalRepository repo)
    {
      this._repo = repo;
    }
    public List<AnimalModel> GetAnimals()
    {
      var animals = _repo.GetAnimals();
      if (animals == null) return null;
      return animals.Select(a => AnimalModelMapper(a)).ToList();
    }

    public AnimalModel GetAnimalById(int id)
    {
      var animal = _repo.GetAnimalById(id);
      if (animal == null) return null;
      return AnimalModelMapper(animal);
    }

    public AnimalModel AddAnimal(AnimalModel animalModel)
    {
      var animal = AnimalMapper(animalModel);
      _repo.AddAnimal(animal);
      return animalModel;

    }

    public AnimalModel UpdateAnimal(AnimalModel animalModel)
    {
      var animal = AnimalMapper(animalModel);
      _repo.UpdateAnimal(animal);
      return animalModel;

    }

    public void DeleteAnimal(int id)
    {
       _repo.DeleteAnimal(id);
    }

    //Mapping Objects
    private AnimalModel AnimalModelMapper(Animal animal)
    {
      return new AnimalModel
      {
        Id = animal.Id,
        AnimalName = animal.AnimalName,
        Type = animal.Type
      };
    }
    private Animal AnimalMapper(AnimalModel animalModel)
    {
      return new Animal
      {
        Id = animalModel.Id,
        AnimalName= animalModel.AnimalName,
        Type= animalModel.Type
      };
    }
    public virtual bool IsValid(object value)
    {
      return !string.IsNullOrWhiteSpace(value.ToString());
    }

    //return overriden ValidationResult
    public virtual ValidationResult IsValid(object value, ValidationContext validationContext)
    {
      if (IsValid(value)) return ValidationResult.Success;
      var message = "Ops";
      return new ValidationResult(message);
    }
  }
}
