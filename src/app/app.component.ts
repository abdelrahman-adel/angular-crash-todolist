import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Abdo';

  constructor() {
    console.log('In app.component');
    this.name = 'Abd';
    this.setName('Abd-Elrahman');
  }

  setName(name: string) {
    console.log('In app.component.setName()');
    this.name = name;
  }
}
