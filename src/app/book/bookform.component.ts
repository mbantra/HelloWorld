import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

  bookName = 'Alchemist';

  constructor() { }

  ngOnInit() {
  }

  OnClickEvent($event)
  {
    console.log($event);
    $event.stopPropagation();

  }
  ClickDiv()
  {
    console.log('Hi');

  }

  OnKeyUpEvent(num)
  {
    console.log(num);
  //   if($event.keyCode ===13)//enter key
  //   console.log('Enter was pressed!');

  //  
  }
}
