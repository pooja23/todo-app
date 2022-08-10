import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add another list ', () => {
    const spy = spyOn(component.todoForm, "reset");
    component.addList();
    expect(spy).toHaveBeenCalled();
  });

  it('should deleteItem from the list', () => {
    const list = ["complete assignment", "mark fixed defects"];
    component.deleteItem(list, 0);
    expect(list.length).toEqual(1);
  });

  it('should todo list item', () => {
    component.addTodoListItem(component.todoList[0], "new item");
    expect(component.todoList[0].items.length).toEqual(3);
  });
});
