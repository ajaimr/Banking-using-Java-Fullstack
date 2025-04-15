import { Component } from '@angular/core';
import { Nav2Component } from "../nav2/nav2.component";
import { HomePageComponent } from "../home-page/home-page.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home2',
  imports: [Nav2Component, HomePageComponent,RouterOutlet],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component {

}
