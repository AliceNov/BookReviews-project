import { EntityState } from "@ngrx/entity";
import { Book, BookPageable } from "src/models/book.model";

export interface BookState extends EntityState<Book | BookPageable> {
    selectedBookId: number | null;
}
