import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HomePageComponent } from "../home-page/home-page.component";

@Component({
  selector: 'app-home-main',
  imports: [NavbarComponent, HomePageComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.css'
})
export class HomeMainComponent {

}
