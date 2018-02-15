import { Routes } from '@angular/router';
import {LoginComponent} from './login.component';

export const SignupRoutes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: LoginComponent
        }]
    }
];
