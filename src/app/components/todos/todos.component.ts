import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  inputTodo: string = "";

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

<<<<<<< HEAD
=======
  toggleDone(id: number){
    this.todos.map((v, i) => {
      if(i == id)
      v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id: number){
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = "";
  }
>>>>>>> parent of 869dacd (Revert "another update")
}
