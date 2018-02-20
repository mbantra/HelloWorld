import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { IPost } from './book-list/IPost';


@Injectable()
export class BookService {

  private url = 'https:///jsonplaceholder.typicode.com/posts';
  constructor(private _http: HttpClient) 
  {

  }

   getAllBooks()
   {
    return this._http.get<IPost[]>(this.url)
    .map(posts => posts as IPost[]);
   }

}
