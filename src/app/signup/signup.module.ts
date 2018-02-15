import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import {SignupComponent} from "./signup.component";
import {SignupRoutes} from "./signup.routing";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SignupRoutes),
        MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpClientModule
    ],
    declarations: [
        SignupComponent
    ],
    providers: [

    ]
})

export class SignupModule {}
