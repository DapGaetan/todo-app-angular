import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export interface TodoItem{
  id:number;
  task:string;
  completed:boolean;
}

export class AppComponent {
  todoList : TodoItem [] = [];

  newTask:string = ''
}
