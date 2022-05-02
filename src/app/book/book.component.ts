import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Book } from './book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnChanges {
  books!: Book[];
  errorMessage!: string;
  nextId!: number;
  constructor(private bookService: BooksService) { }

  getBooks() {
    this.bookService.getBooks().subscribe({
      next: books => {
        this.books = books
        this.nextId = books.length + 1
      },
      error: error => this.errorMessage = JSON.stringify(error),
      complete: () => console.log("ehasgrd")
    })
  }
  addBook(bookId: string, name: string): void {
    let id = parseInt(bookId)
    this.bookService.addBook({ id, name })
      .subscribe({
        next: (book: any) => {
          this.books.push(book)
          this.nextId++
        }
      });
  }
  updateBook(bookId: number, name: string) {
    // this.bookService.
  }
  ngOnInit(): void {
    console.log("onInit called !");
    this.getBooks()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`changes: ${changes}`);
  }

}
