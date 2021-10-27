import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.bookService.findAll().subscribe(data => {
      this.books = data;
    });
  }

}
