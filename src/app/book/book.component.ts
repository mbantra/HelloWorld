import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  title = 'Book Title';
  bookName = 'Hello World';
  Author = 'Some Author';
  constructor() { }

  ngOnInit() {
  }

  // getBooks(): IBooks[] {
  //   return [
  //     {
  //       userId: 1,
  //       id: 1,
  //       title: "Hello World",
  //       rating: 2.56123132,
  //       publish: new Date(2015, 1, 1),
  //       description: "adsdasdasdassdasd"

  //     }
  //   ]


  // }

}
