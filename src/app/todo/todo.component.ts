import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoForm!: FormGroup;
  todoItemForm!: FormGroup;
  todoList = [
    {
      title: "TO Do",
      items: ["complete assignment", "mark fixed defects"],
      showAddItemForm: false,
      itemsToAdd: ""
    },
    {
      title: "in-progress",
      items: ["Prepare ramp up plan", "solutioning for the idea"],
      showAddItemForm: false,
      itemsToAdd: ""
    },
    {
      title: "Done",
      items: ["Analyse Security defects", "schedule training for new joiners"],
      showAddItemForm: false,
      itemsToAdd: ""
    }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
    });
  }

  public addList() {
    this.todoList.push({
      title: this.todoForm.controls.todo.value,
      items: [],
      showAddItemForm: false,
      itemsToAdd: ""
    });
    this.todoForm.reset();
  }

  public addTodoListItem(todoItem: any, value: string) {
    todoItem.items.push(value);
    todoItem.showAddItemForm = false;
    todoItem.itemsToAdd = "";
  }

  public deleteItem(list:string[], index: number) {
    list.splice(index, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
