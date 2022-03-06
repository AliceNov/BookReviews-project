import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { BookService } from "src/br-app/services/book/book.service";
import { addBook } from "src/br-app/store/actions/book.action";
import { Book } from "src/models/book.model";


@Component({
  selector: "br-create-edit",
  templateUrl: "./create-edit.component.html",
  styleUrls: ["./create-edit.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEditComponent implements OnInit {

  public book: Book = {
    title: "",
    author: "",
    description: "",
    publishedDate: "",
    cover: ""
  };
  private cover: FormData = new FormData();

  constructor(private store: Store,
              private router: Router,
              private bookServiec: BookService) {}

  ngOnInit(): void {
    return;
  }

  onSubmit(): void{
    this.createBook(this.cover);
    this.bookServiec.setStatus(true);
    this.router.navigate(["/books"]);
  }

  onUpload(event: Event): void {
    const selectedFile = (event.target as HTMLInputElement).files[0];
    this.cover.set("file", selectedFile, selectedFile.name);
  }

  createBook(cover: FormData): void {
    this.store.dispatch(addBook({ book: this.book, form: cover }));
  }

}
