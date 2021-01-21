using AnimalApi.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AnimalApi.Data.DbContexts
{
  public class AnimalRepository : IAnimalRepository
  {
    private AnimalContext _context;
    public AnimalRepository(AnimalContext context)
    {
      this._context = context;
    }

    public List<Animal> GetAnimals()
    {
      return _context.Animals.ToList();
    }

    public Animal GetAnimalById(int id)
    {
      return _context.Animals.Find(id);
    }

    public Animal AddAnimal(Animal animal)
    {

      _context.Animals.Add(animal);
      _context.SaveChanges();
      return animal;
    }

    public Animal UpdateAnimal(Animal animal)
    {
      try
      {
        if (_context != null)
        {
          _context.Animals.Update(animal);
          _context.SaveChanges();
          return animal;
        }
        else
        {
          return null;
        }

      }
      catch (Exception)
      {

        throw;
      }
    }

    public void DeleteAnimal(int id)
    {
      var entity = _context.Animals.Find(id);
      if (entity != null)
      {
        _context.Animals.Remove(entity);
        _context.SaveChanges();
      }

    }
  }
}
