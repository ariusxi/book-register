import { Component } from '@angular/core';

import { Book } from '../../model/Book';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {

    public booksList: Book[] = []

    onBookRegistered(book: Book): void {
        this.booksList.push(book);
    }

}
