import { Component, OnInit } from '@angular/core';
import {RouterOutlet,RouterLink} from '@angular/router'
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] , 
  providers: [RouterLink, RouterOutlet]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
