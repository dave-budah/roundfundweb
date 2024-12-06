import { Component } from '@angular/core';
import {NavbarComponent} from "../partials/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "../partials/footer/footer.component";

@Component({
  selector: 'public',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent
  ],
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
<!--    <app-footer></app-footer>-->
  `,
  styles: `
  `
})
export class PublicComponent {

}
