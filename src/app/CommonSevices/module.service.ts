import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) { }

  loadModules() {
    const Modules = [
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
      { "ModuleId": 3, "ModuleName": "Reports", "path": "" },
      { "ModuleId": 4, "ModuleName": "User Account", "path": "" },

    ]
   
    return  Modules;

    

      


  }

}
