import * as uuid from 'uuid';

export class Book {

    public readonly id: string;
    public title: string;
    public author: string;
    public pagesNumber: number;

    constructor(props: Omit<Book, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid.v4();
        }
    }

}
