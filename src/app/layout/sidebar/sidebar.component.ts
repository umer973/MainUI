import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModuleService } from 'src/app/CommonSevices/module.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() selectTedRoute = new EventEmitter();
  @Input() loggedUser:any;

  modules: any[];
  pages: any[];
  routeUrl = "layout/";
  userObject: any;

  constructor(private router: Router, private route: ActivatedRoute, private service: ModuleService) { }

  ngOnInit() {
    this.userObject = this.route.snapshot.queryParamMap.get("user");
    
    console.log(this.userObject);
    this.modules = this.service.loadModules();

  }


  currentRoute(Selectedroute: any) {

    this.routeUrl = "layout/";
    this.routeUrl = this.routeUrl + Selectedroute;
    console.log(Selectedroute);
    this.router.navigate([this.routeUrl])
  }


}
