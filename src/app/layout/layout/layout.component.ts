import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  loggedUser:any;
  constructor(private route:ActivatedRoute,private loaderservice:LoaderService,private router:Router) {
    
  }

   
   
 
  ngOnInit() {
    this.loggedUser=this.route.snapshot.queryParamMap.get('user');
    console.log(this.loggedUser,"user");
  }
  navigate()
  {
    this.router.navigate(['layout/users']);
  }
 
}
