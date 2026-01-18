import { Component } from '@angular/core';
import { Header } from './header';
import { Contacts } from './contacts/contacts';

@Component({
  selector: 'app-root',
  imports: [Header, Contacts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'cms';
}