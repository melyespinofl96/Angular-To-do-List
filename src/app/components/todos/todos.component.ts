import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },{
        content: 'Second Todo',
        completed: true
      }
    ]
  }
  //Continue at 19:00
  //otro dia po
  //otra namas paque sea mas verde xd

}
