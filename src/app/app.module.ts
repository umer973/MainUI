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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

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
    HttpClientModule
    
  ],
  providers: [AuthGuardService,ModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
