import { Component } from '@angular/core';

@Component({
    selector: 'to-do-list',
    template: `
        <h1>To-do list</h1>
        <todo-item [item]="todoItem" (completed)="updateCompletedStatus($event)" [ngClass]="{ 'completed': todoItem.completed }" ></todo-item>
    `,
    styles: [`:host { padding: 20px; clear: both; float: left; border: solid 3px blue; width: 100%; max-width: 100vw; box-sizing: border-box; } .completed { opacity: .42; }`]
})
export class TodoListComponent {

    todoItem = {
        title: 'go get a beer',
        completed: false
    };
    updateCompletedStatus(status: any) {
        this.todoItem.completed = status;
    }
}
