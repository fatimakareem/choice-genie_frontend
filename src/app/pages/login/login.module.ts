import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../../app.module';

import {LoginComponent} from "./login.component";
// import {SignupRoutes} from "./login.routing";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path:'login-cmp',component:LoginComponent}
        ]),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpClientModule
    ],
    declarations: [LoginComponent],
    providers: [

    ]
})

export class LoginModule {}
