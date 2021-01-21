import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteViewAnimalComponent } from './pages/delete-view-animal/delete-view-animal.component';
import { CreateEditAnimalComponent } from './pages/create-edit-animal/create-edit-animal.component';
import { ViewAnimalComponent } from './pages/view-animal/view-animal.component';
import { IndexAnimalComponent } from './pages/index-animal/index-animal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './_components';

@NgModule({
  declarations: [
    AppComponent,
    DeleteViewAnimalComponent,
    CreateEditAnimalComponent,
    ViewAnimalComponent,
    IndexAnimalComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
