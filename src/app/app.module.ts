import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArreglosComponent } from './views/arreglos/arreglos.component';
import { MatrizComponent } from './views/matriz/matriz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArreglosComponent,
    MatrizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
