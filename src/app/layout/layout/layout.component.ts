import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  currentRoute:any="Dashboard";
  constructor() {
    this.currentRoute="Dashboard";
   }
 
  ngOnInit() {
  }

  selectCurrentRoute(route?:any)
  {
    console.log(route,"parent");
    this.currentRoute=route;
  }
}
