import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Animal } from '../_models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  //get all available animal
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${environment.apiUrl}/animals`)
      .pipe(
        map((data: Animal[]) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      )
  }


  //get animal by Id 
  getAnimalById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${environment.apiUrl}/animals/${id}`)
      .pipe(
        map((data: Animal) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      )
  }

  //add or post new animal
  addAnimal(animal: Animal): Observable<Animal> {
    return this.http.post(`${environment.apiUrl}/animals`, animal)
      .pipe(
        map((data: Animal) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }


  //update animal
  updateAnimal(id: number, animal: Animal): Observable<Animal> {
    return this.http.put(`${environment.apiUrl}/animals/${id}`, animal)
      .pipe(
        map((data: Animal) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        }));
  }

  //remove animal by id from the list
  deleteAnimal(id: number) {
    return this.http.delete(`${environment.apiUrl}/animals/${id}`)
      .pipe(
        map((data: Animal) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        }));
  }

}
