import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/model/Book';

@Component({
    selector: 'book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {

    @Output() bookRegister = new EventEmitter();

    public title: string;
    public author: string;
    public pagesNumber: number;

    onRegisterBook(): void {
        const book: Book = new Book({
            title: this.title,
            author: this.author,
            pagesNumber: this.pagesNumber,
        })

        this.eventEmitAndClear(book);
    }

    eventEmitAndClear(book: Book): void {
        this.bookRegister.emit(book);
        Object.assign(this, {
            name: '',
            email: '',
            telephone: '',
        })
    }

}
