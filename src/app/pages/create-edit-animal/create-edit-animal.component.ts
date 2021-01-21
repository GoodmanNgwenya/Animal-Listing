import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService, AnimalService } from 'src/app/_services';

@Component({
  templateUrl: './create-edit-animal.component.html',
  styleUrls: ['./create-edit-animal.component.css']
})
export class CreateEditAnimalComponent implements OnInit {

  animalForm: FormGroup;
  id: number;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  removeWhiteSpace: RegExp;
  public response: {dbPath: ''};

  constructor(private fb: FormBuilder, private animalService: AnimalService,
    private route: ActivatedRoute, private alertService: AlertService,
    private router: Router) {

  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.removeWhiteSpace = new RegExp("\\S");

    this.animalForm = this.fb.group({
      animalName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern(this.removeWhiteSpace)]],
      type: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(1000), Validators.pattern(this.removeWhiteSpace)]]
     // imgPath: this.response.dbPath
    });


    // Read the animal Id from the route parameter
    if (!this.isAddMode) {
      this.animalService.getAnimalById(this.id)
        .pipe(first())
        .subscribe(x => this.animalForm.patchValue(x));
    }

  }

  // convenience getter for easy access to form fields
  get f() { return this.animalForm.controls; }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();
    // stop here if form is invalid
    if (this.animalForm.invalid) {
      return;
    }
    this.loading = true;
    if (this.isAddMode) {
      this.addAnimal();
    } else {
      this.updateAnimal();
    }
  }

  //Add new animal method
  private addAnimal() {

    this.animalService.addAnimal(this.animalForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Animal added successfuly', { keepAfterRouteChange: true });
          this.router.navigate(['/index'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  //update animal mthod
  private updateAnimal() {
    this.animalService.updateAnimal(this.id, this.animalForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success(`Animal  ( ${this.animalForm.value.animalName} ) updated successfuly`, { keepAfterRouteChange: true });
          this.router.navigate(['/index']);
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  // public uploadFinished = (event) => {
  //   this.response = event;
  // }

  // public createImgPath = (serverPath: string) => {
  //   return `http://localhost:63644/${serverPath}`;
  // }

}
