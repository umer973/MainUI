import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() selectTedRoute = new EventEmitter();

  modules: any[];
  pages: any[];
  routeUrl="layout/";

  constructor(private router: Router) { }

  ngOnInit() {
    this.binfModules();
  }

  currentRoute(Selectedroute: any) {
   
    this.routeUrl="layout/";
    this.routeUrl=this.routeUrl+Selectedroute;
    console.log(Selectedroute);
    this.router.navigate([this.routeUrl])
  }

  binfModules() {

    this.modules = [
      {
        "ModuleId": 1, "ModuleName": "Maters",
        "Pages": [
          { "path": "addproduct", "PageName": "Add Product" },
          { "path": "addbrand", "PageName": "Add Brand" },
        ]
      },
      {
        "ModuleId": 2, "ModuleName": "Transations", "path": "",
        "Pages": [
          { "path": "adddealer", "PageName": "Add Dealer" },
        ]
      },
      { "ModuleId": 3, "ModuleName": "Reports", "path": "" }
    ]

    console.log(this.modules);

  }
  bindPages() {

  }
}
