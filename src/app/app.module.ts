import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosModule } from './todos/todos.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/routing.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, TodosModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
