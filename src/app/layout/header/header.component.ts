import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  UserName: any;

  constructor(private route:Router) { }

  ngOnInit() {
    this.UserName= localStorage.getItem('UserName');
  }

  toggleAside() {

    var divId= document.getElementById("mainAppBody");
    if (divId.classList.contains('sidebar-show'))
    divId.classList.remove('sidebar-show');
    else
    divId.classList.add('sidebar-show');
    //document.getElementById("mainAppBody").className += "aside-menu-lg-show sidebar-show";
  }

  ShowDropDown() {
    debugger;
    var divId = document.getElementById("divNav");
    if (divId.classList.contains('show'))
      divId.classList.remove('show');
    else
      divId.classList.add('show');

  }
  LogOut()
  {
    localStorage.setItem('isLoggedin', 'false')
    this.route.navigate(['/login']);
    
  }
}
