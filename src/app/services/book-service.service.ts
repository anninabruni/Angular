import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/books';
  }

  public findAll(): Observable<Book[]> {
    console.log(this.http.get<Book[]>(this.usersUrl));
    return this.http.get<Book[]>(this.usersUrl);
  }

  public save(book: Book) {
    return this.http.post<Book>(this.usersUrl, book);
  }
}
