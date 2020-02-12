import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsModule } from './Project/ProductDetails/product-details.module';
import { SalesPaymentModule } from './Project/SalesPayment/sales-payment.module';
import { IGMCModule } from './Project/IGMC/igmc.module';
import { LayoutModule } from './layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './auth-guard.service';
import { HttpClientModule } from '@angular/common/http'
import { ModuleService } from './CommonSevices/module.service';
import { AccountsModule } from './Project/Accounts/accounts.module';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './Project/material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './loader/loader.component';
import { OfficeExpensesModule } from './Project/OfficeExpenses/office-expenses.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoaderComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductDetailsModule,
    SalesPaymentModule,
    IGMCModule,
    AccountsModule,
    LayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OfficeExpensesModule,
    //MatInputModule,
    //MaterialModule,
    NgbModule,
    
    
    
   
    
  ],
  exports:[],
  providers: [AuthGuardService,ModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
