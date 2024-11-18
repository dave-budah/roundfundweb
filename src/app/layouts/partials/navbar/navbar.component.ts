import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    NgIf,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
// Toggle Off Canvas menu
  isCanvasMenuOpen = false;
  openSubmenuIndex: number | null = null;

  toggleCanvasMenu() {
    this.isCanvasMenuOpen = !this.isCanvasMenuOpen;
  }

  closeCanvasMenu() {
    this.isCanvasMenuOpen = false;
  }


  // Toggle submenu
  toggleSubmenu(index: number) {
    if (this.openSubmenuIndex === index) {
      this.openSubmenuIndex = null; // Close the submenu if it's already open
    } else {
      this.openSubmenuIndex = index; // Open the clicked submenu
    }
  }

  menuItems = [
    {
      title: 'Ecosystem',
      submenu: [
        {title: 'Merchants', url: '/merchants' },
        {title: 'Individuals', url: '/individuals' },
        {title: 'Cooperatives', url: '/cooperatives' },
        {title: 'Card Issuers', url: '/card-issuers' },
        {title: 'Governments', url: '/governments' },
      ]
    },
  ];

}
