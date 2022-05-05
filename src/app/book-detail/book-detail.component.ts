import { JsonPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Book } from "../book/book";
import { BooksService } from "../book/books.service";

@Component({
    selector: "app-book-detail",
    templateUrl: "./book-detail.component.html",
    styleUrls: ["./book-detail.component.css"],
})
export class BookDetailComponent implements OnInit {
    book!: Book;
    constructor(
        private route: ActivatedRoute,
        private bookService: BooksService
    ) {}
    ngOnInit(): void {
        // this.bookService.getBooks().subscribe({
        //     next: (books) => {
        //         let routeId = this.route.snapshot.params["id"];
        //         console.log(`routeId: ${routeId}`);
        //         console.log(`books = ${new JsonPipe().transform(books)}`);
        //         this.book = books.filter((book) => {
        //             console.log(
        //                 `book id = ${book.id},book name = ${
        //                     book.name
        //                 }, routeId: ${routeId}, type of routeid: ${typeof routeId}`
        //             );
        //             if (book.id === parseInt(routeId)) return true;
        //             return false;
        //         })[0];
        //         console.log(`this.book = ${this.book}`);
        //     },
        // });
        this.route.paramMap.subscribe({
            next: (params) => {
                let id = params.get("id") ?? "";
                this.bookService.getBook(id).subscribe({
                    next: (book) => {
                        console.log(
                            `book fetched = ${new JsonPipe().transform(book)}`
                        );
                        this.book = book ?? this.book;
                    },
                });
            },
        });
    }
}
