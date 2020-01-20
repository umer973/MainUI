import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  loggedUser:any;
  constructor(private route:ActivatedRoute) {

   
   }
 
  ngOnInit() {
    this.loggedUser=this.route.snapshot.queryParamMap.get('user');
    console.log(this.loggedUser,"user");
  }

 
}
