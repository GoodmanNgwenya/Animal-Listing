import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/_models';
import { AnimalService } from 'src/app/_services';

@Component({
  templateUrl: './index-animal.component.html',
  styleUrls: ['./index-animal.component.css']
})
export class IndexAnimalComponent implements OnInit {

  animals: Animal[] = [];


  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {

    this.animalService.getAll().subscribe({
      next: animals => {
        this.animals = animals;
      }
    })
  }

}
