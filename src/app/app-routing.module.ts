import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditAnimalComponent, DeleteViewAnimalComponent, IndexAnimalComponent, ViewAnimalComponent } from './pages';


const routes: Routes = [
  { path: 'index', component: IndexAnimalComponent },
  { path: 'view', component: ViewAnimalComponent },
  { path: 'create', component: CreateEditAnimalComponent },
  { path: 'editAnimal/:id/edit', component: CreateEditAnimalComponent },
  { path: 'delete', component: DeleteViewAnimalComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
