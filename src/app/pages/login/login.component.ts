import { Component, OnInit, ElementRef } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from "/Users/Brainplow/Documents/GitHub/genie/src/app/Config";

import { ActivatedRoute, Router } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { Console } from '@angular/core/src/console';
import swal from 'sweetalert2';
import { TOUCHEND_HIDE_DELAY } from '@angular/material';
import { HomeRoutes } from '../../home/home.routing';
declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    username;
    password;

    constructor(public router: Router, private element: ElementRef, private http: Http, private route: ActivatedRoute, private sg: SimpleGlobal) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;

    }

    ngOnInit() {
        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    }
    sweetalertlogin() {
        swal({
            text: "Login Successflluy!",
            title: "Choice Genie",
            type: "success",
            showConfirmButton: false,
            //     confirmButtonColor: "#DD6B55",
            timer: 1200,
            confirmButtonText: "OK",

        })
            this.router.navigate(['/home'])
        {

            // swal("Login Successflluy!", "Choice Genie", "success", ).then(function () {
            //     this.router.navigate(['/home'])
            // });


            // this.router.navigate(['/home'])  

        };
        // swal("Login Successflluy!", "Choice Genie","success") 

        // this.router.navigate(['/home']);
        // function(){
        //     window.location.href ='home.html';
        // };


    }
    login(username:any, password:any) {

        // this.route.params.subscribe(params => {
        //   let zip =  this.sg['product_zipcode'];
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
        this.http.put(Config.api + 'login/', { "username": this.username, "password": this.password }, { headers: headers })

            // this.http.post(Config.api + 'monthly/' + this.zip_code + '/' + this.months + '',{"month": this.months+" Month","custom":"['2','8']"},{ headers: headers })
            .subscribe(Res => {


            });
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
