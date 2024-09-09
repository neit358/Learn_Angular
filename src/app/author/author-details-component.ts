import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../author.model';

@Component({
    selector: 'AuthorDetails',
    standalone: true,
    template: `
        <div>
            {{author.lastName}} {{author.firstName}}
            <button style="margin-left: 1rem;" (click)="select.emit(author)" >Selected</button>
            <button (click)="delete.emit(author.id)">X</button>
        </div>
    `,
})
export class AuthorDetailsComponent {
    @Input() author: Author = {};
    @Output() select = new EventEmitter<Author>();
    @Output() delete = new EventEmitter<number>();
}

