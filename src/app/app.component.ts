import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My dream';
  name = '';

  onChnageText(event : Event) {
    console.log(event);
    this.name = (<HTMLInputElement>event.target).value;
  }
  

}

