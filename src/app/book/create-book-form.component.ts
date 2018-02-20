import { Component, OnInit } from '@angular/core';
import { IBook } from './book';

@Component({
  selector: 'app-create-book-form',
  templateUrl: './create-book-form.component.html',
  styleUrls: ['./create-book-form.component.css']
})
export class CreateBookFormComponent implements OnInit {

  book : IBook =  { 
    id: 100,
    name: '',
    author: '',
    description: '',
    price: 0.0
    };
  constructor() { }

  ngOnInit() {
  }

  SaveBook(testvar)
  {
    console.log('Form Submitted: ' + testvar.bookName);

  }

}
