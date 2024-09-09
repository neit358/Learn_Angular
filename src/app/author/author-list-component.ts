import { Component } from '@angular/core';
import { Author, authors } from '../author.model';
import { CommonModule, NgFor } from '@angular/common';
import { AuthorDetailsComponent } from './author-details-component';


@Component({
    selector: 'AuthorList',
    imports: [NgFor, AuthorDetailsComponent],
    standalone: true,
    template: `
        <AuthorDetails *ngFor="let author of authors;" [author]="author" (select)="onHandleSelected($event)"  (delete)="onHandleDeleted($event)">

        </AuthorDetails>
        <span>
            {{currentAuthor.lastName}} {{currentAuthor.firstName}}
        </span>
    `,
})
export class AuthorListComponent {
    authors = authors;

    currentAuthor = authors[0];

    onHandleSelected = (author: Author) => {
        this.currentAuthor = author;
    }

    onHandleDeleted = (id: number) => {
        this.authors = this.authors.filter(x => x.id !== id)!;
        this.currentAuthor = this.authors[0];
    }
}
