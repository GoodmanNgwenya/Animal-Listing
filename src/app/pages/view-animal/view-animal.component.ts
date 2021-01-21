import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Animal } from 'src/app/_models';
import { AlertService, AnimalService } from 'src/app/_services';

@Component({
  templateUrl: './view-animal.component.html',
  styleUrls: ['./view-animal.component.css']
})
export class ViewAnimalComponent implements OnInit {

  animals: Animal[] = [];
  loading = false;


  constructor(private animalService: AnimalService,private alertService:AlertService,
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.animalService.getAll().subscribe({
      next: animals => {
        this.animals = animals;
      }
    })
  }

  deleteAnimal(id:any): void {
    this.animalService.deleteAnimal(id)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success(`Animal deleted successfuly`, { keepAfterRouteChange: true });
          this.router.navigate(['/index'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

}


