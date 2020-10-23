import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleAside() {
  
    document.getElementById("mainAppBody").className+="aside-menu-lg-show sidebar-show";
  }

}
