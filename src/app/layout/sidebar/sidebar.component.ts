import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() selectTedRoute = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit() {
  }

  currentRoute(route:any) { 
    console.log(route,"child");
    //this.router.navigate['/addproduct']
    this.router.navigate(['layout/addproduct'])
    
   // this.selectTedRoute.emit(route);
}

}
