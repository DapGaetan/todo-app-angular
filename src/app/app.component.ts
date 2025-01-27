import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';

export interface TodoItem{
  id:number;
  task:string;
  completed:boolean;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatListModule, MatCheckboxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  deleteTask() {
  throw new Error('Method not implemented.');
  }
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
      this.newTask = ''
    }
  }

  completTask(index : number):void {
    this.todoList[index].completed = !this.todoList[index].completed
    console.log(index)
  }
}
