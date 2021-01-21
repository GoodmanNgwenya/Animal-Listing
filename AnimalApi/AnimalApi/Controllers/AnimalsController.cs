using AnimalApi.Helpers;
using AnimalApi.Services;
using AnimalApi.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnimalApi.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class AnimalsController : ControllerBase
  {
    private IAnimalService _animalService;
    public AnimalsController(IAnimalService animalService)
    {
      this._animalService = animalService;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
      var animals = _animalService.GetAnimals();
      return Ok(animals);
    }
    [HttpGet("{id}")]
    public IActionResult GetAll(int id)
    {
      var animal = _animalService.GetAnimalById(id);
      return Ok(animal);
    }

    [HttpPost]
    public IActionResult Post([FromBody] AnimalModel animalModel)
    {
      try
      {
        if (_animalService.IsValid(animalModel))
        {
          _animalService.AddAnimal(animalModel);
          return Ok(animalModel);
        }
        else
        {
          return BadRequest();
        }
      }
      catch (AppException ex)
      {

        // return error message if there was an exception;
        return BadRequest(new { message = ex.Message });
      }
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] AnimalModel animalModel)
    {
      try
      {
        animalModel.Id = id;
        if (_animalService.IsValid(animalModel))
        {
          _animalService.UpdateAnimal(animalModel);
          return Ok(animalModel);
        }
        else
        {
          return BadRequest();
        }

      }
      catch (AppException ex)
      {

        return BadRequest(new { message = ex.Message });
      }
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      _animalService.DeleteAnimal(id);
      return Ok();
    }



  }


}
