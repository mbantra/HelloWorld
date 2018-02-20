import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule}  from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookformComponent } from './book/bookform.component';
import { CreateBookFormComponent } from './book/create-book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './book.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GreetingComponent } from './greeting/greeting.component';
import { GreetingService } from './greeting/greeting.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookformComponent,
    CreateBookFormComponent,
    BookListComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,   //path is the URL   path:'/customer' , component:CustomerComponent
    RouterModule.forRoot( [ { path: '', component: BookListComponent},
                            { path: 'greeting', component: GreetingComponent}] )
  ],
  providers: [BookService, GreetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//install it through the npm, export in app.module and then use the classes in your html

//he is asking about bootstrap?