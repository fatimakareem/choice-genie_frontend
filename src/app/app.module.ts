import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

// or
//import { CarouselModule } from 'ngx-bootstrap';

import {

  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
 
} from '@angular/material';



import { AppComponent } from './app.component';
import { SimpleGlobal } from 'ng2-simple-global';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { CustomerLayoutComponent } from './layouts/customer/customer-layout.component';
import { NormalLayoutComponent } from './layouts/normal/normal-layout.component';

import { AppRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { AboutComponent } from './about/about.component';
import {StepperOverviewExample} from "./signup/stepper-overview-example";
import {HomeService} from './home/home.service';
import {BrowserModule, BrowserTransferStateModule} from "@angular/platform-browser";
import { DataService } from './data.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { RegisteredComponent } from './registered/registered.component';
//  import { Signup1Component } from './signup1/signup1.component';

// or
//import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    MatFormFieldModule
   
  ],
  declarations: [RegisteredComponent],

})
export class MaterialModule {}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'PlugExp' }),
    BrowserTransferStateModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    MaterialModule,
    MatNativeDateModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    Ng2CarouselamosModule,
    FooterModule, 
    // Specify your library as an import
  //  SlickModule.forRoot(),
    
    CarouselModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CustomerLayoutComponent,
    NormalLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    HeaderComponent,
    UserSidebarComponent,
    AboutComponent,
    StepperOverviewExample,
  ],
  providers: [
    HomeService,
    SimpleGlobal,
    DataService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
