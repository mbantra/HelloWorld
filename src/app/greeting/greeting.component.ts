import { Component, OnInit } from '@angular/core';
import { GreetingService } from './greeting.service';
import { IGreeting } from './IGreeting';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  errorMessage : string;
  greeting : IGreeting = {id:1, content:""};
  constructor(private _greetingService : GreetingService) 
  {
    console.log('hi');
  }

  GetGreeting()
  {
    this._greetingService.getGreetingByName(this.greeting.content).subscribe(g =>  { 
      this.greeting = g ;
      console.log(this.greeting);
     });
  }

  CreateGreeting()
  {
    this._greetingService.createGreeting(this.greeting).subscribe( ge => { 
            					   this.greeting = ge;
        });
        console.log('greeting is created with: ' + this.greeting.id + ' ' + this.greeting.content);
  }
  ngOnInit() {
  }

}
