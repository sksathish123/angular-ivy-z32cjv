import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: String = 'sathish';
  Age: number = 23;
  Location: string = 'chennai';
  course: string = 'Angular';

  ontog: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.ontog = false;
    }, 2000);
  }
  Submit() {
    if (this.Location == 'chennai') this.Location = 'Bangalore';
    else {
      this.Location = 'chennai';
    }
  }
}
