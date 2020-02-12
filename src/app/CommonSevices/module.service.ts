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
          { "path": "addcategory", "PageName": "Add Category" },
          { "path": "adddealer", "PageName": "Add Dealer" },
          { "path": "addhsn", "PageName": "Add HSN" },
        ]
      },
      {
        "ModuleId": 2, "ModuleName": "ProductDetails", "path": "",
        "Pages": [
          { "path": "manageproduct", "PageName": "Manage Product" },
          { "path": "expiredproducts", "PageName": "Expired Products" },
           { "path": "moredetails", "PageName": "More Details" },
           { "path": "allproductdetails", "PageName": "All Details" }
        ]
      },
      {
        "ModuleId": 3, "ModuleName": "Expenses", "path": "",
        "Pages": [
          { "path": "addexpenses", "PageName": "Add Expenses" },
         
        ]
      },
      {
        "ModuleId": 4, "ModuleName": "Accounts", "path": "",
        "Pages": [
          { "path": "createaccount", "PageName": "Create Account" },
          { "path": "manageaccount", "PageName": "Manage Account" },
        ]
      },

      { 
        "ModuleId": 5, "ModuleName": "Sales/Reports", "path": "" ,
        "Pages": [
          { "path": "addbill", "PageName": "Add Bill" },
        ] 
      },
      
      { "ModuleId": 6, "ModuleName": "User Account", "path": "" },
    ]
   
    return  Modules;

    

      


  }

}
