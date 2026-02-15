import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Dropdown } from './dropdown';

@Component({
  selector: 'cms-header',
  imports: [Dropdown, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
}
