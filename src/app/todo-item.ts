import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'todo-item',
    template: `
        <h4>Title: {{item.title}}</h4>
        <h4>Status: {{item.completed}}</h4>
        <label>
            Completed
            <input id="checkBox" type="checkbox" (change)="complete($event)" >
        </label>
    `,
    styles: [`:host { padding: 20px; clear: both; float: left; border: solid 3px green; width: 100%; box-sizing: border-box; }`]
})
export class TodoItemComponent {

    @Input() item;
    @Output() completed = new EventEmitter();

    complete(event) {
        this.completed.emit(event.target.checked);
    }
}
