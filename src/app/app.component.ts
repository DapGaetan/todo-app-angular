import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

export interface TodoItem{
  id:number;
  task:string;
  completed:boolean;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  todoList : TodoItem [] = [];

  newTask:string = ''


  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newTodoItem : TodoItem= {
        id : Date.now(),
        task : this.newTask,
        completed : false
      }
      this.todoList.push(newTodoItem)
      console.log(this.todoList)

      this.newTask = ''
    }
  }
}
