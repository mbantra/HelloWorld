import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IPost } from './IPost';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  posts : IPost[];
  constructor(private _bookService : BookService) 
  {
    this._bookService.getAllBooks()
    .subscribe(p =>  { 
      this.posts = p ; 
      console.table(this.posts);
    });

   }

  ngOnInit() {
  }

}
