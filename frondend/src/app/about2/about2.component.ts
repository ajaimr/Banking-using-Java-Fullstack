import { Component } from '@angular/core';
import { Nav2Component } from "../nav2/nav2.component";
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-about2',
  imports: [Nav2Component, RouterOutlet, AboutComponent],
  templateUrl: './about2.component.html',
  styleUrl: './about2.component.css'
})
export class About2Component {

}
