import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'to-do-list',
    template: `
        <ng-container #vc></ng-container>
    `,
})
export class TodoListComponent {

    @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;

    addItem(v) {
        this.vc.insert(v);
        // console.log( `index of :: ${this.vc.indexOf(v)}` );
    }

    removeItem(index) {
        return this.vc.detach(index);
    }

}
