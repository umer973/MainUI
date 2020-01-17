import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleService } from 'src/app/CommonSevices/module.service';

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

  constructor(private router: Router,private service:ModuleService) { }

  ngOnInit() {
    
    this.modules=this.service.loadModules();

  }
  

  currentRoute(Selectedroute: any) {
   
    this.routeUrl="layout/";
    this.routeUrl=this.routeUrl+Selectedroute;
    console.log(Selectedroute);
    this.router.navigate([this.routeUrl])
  }

 
}
