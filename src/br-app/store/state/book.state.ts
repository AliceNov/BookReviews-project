import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Book, BookPageable } from "src/models/book.model";

export interface BookState extends EntityState<Book | BookPageable> {
    selectedBookId: number | null;
}

export const adapter: EntityAdapter<Book | BookPageable> = createEntityAdapter<Book | BookPageable>();
