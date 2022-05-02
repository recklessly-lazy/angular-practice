import { Book } from "./book";
import { BOOKS } from "./books-data";
import { Injectable } from "@angular/core";
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class BooksService {
    constructor(private http: HttpClient) {}
    // getBooks(): Book[] {
    //   console.log("service is fetching books...");
    //   return BOOKS
    // }
    private handleError(err: HttpErrorResponse): Observable<any> {
        let errMsg = "";
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log("An error occurred:", err.error.message);
            errMsg = err.error.message;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}`);
            errMsg = err.error.status;
        }
        return throwError(() => errMsg);
    }
    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>("http://localhost:3020/bookList");
    }
    addBook(book: Book): Observable<any> {
        const options = new HttpHeaders({ "Content-Type": "application/json" });
        return this.http
            .post("http://localhost:3020/addBook", book, { headers: options })
            .pipe(
                tap((data) =>
                    console.log(`post response: ${JSON.stringify(data)}`)
                ),
                catchError(this.handleError)
            );
    }
    updateBook(book: Book): Observable<any> {
        return this.http
            .put("http://localhost:3020/update", book, {
                headers: new HttpHeaders({
                    "Content-Type": "application/json",
                }),
            })
            .pipe(
                tap((data) => console.log(`data: ${JSON.stringify(data)}`)),
                catchError(this.handleError)
            );
    }
}
