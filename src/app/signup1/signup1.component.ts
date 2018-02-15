import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Config } from "../Config";
import { ActivatedRoute, Router } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { FormBuilder, Validators, NgControl, RadioControlValueAccessor,FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
//import { FormControl, FormGroup } from '@angular/forms';
//import { signupdataService } from '../signup1/signupdata.service';
//import { signupuserdata } from "./signup1data.service";
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
//import {signupuserdata} from './signup1data.service';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.scss']
})

export class Signup1Component implements OnInit {

  signupForm: FormGroup;
 private next:any;
  model:any = {};
  normalPattern = '[a-zA-Z0-9_.-]+?';
  digitsOnly = '^[0-9,-]+$';
  email = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
  
  flag = true;
  date = new FormControl(new Date());

  emailexist :boolean =false ;
  constructor(private fb: FormBuilder, private http: HttpClient,private route: ActivatedRoute, private sg: SimpleGlobal) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'fname': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
     'lname': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
     'email': ['', Validators.compose([Validators.required, Validators.pattern(this.email)])],
       'username': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z_\- ]+$/)])],
       'phone':['', Validators.compose([Validators.required, Validators.pattern(this.digitsOnly)])],
       'dob': ['', Validators.compose([Validators.required])],
       'state': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
       'country': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
       'city': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
     'confirmpassword': ['', Validators.compose([Validators.required])],
    });
  }
 
  
  signupuserdata() {
    //alert('hello');
    console.log("CHOICE GENIE",this.model);

    let headers = new HttpHeaders(); 


        headers.append('Content-Type', 'application/json');
        // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
        this.http.post(Config.api + 'signup1/', this.model, { headers: headers })


        //   // this.http.post(Config.api + 'signup/'+ this.zip_code +'', {"premiseid": this.premiseID +'', {headers: headers})
          .subscribe(Res => {
            console.log(Res);
           // this.next = Res[0].next;
           
           console.log(this.model);
        //     //    this.state = Res[0].state;
        //     //this.sg['products'] = Res.json()['Results'];
        //     //this.data.changeProducts(this.sg['products']);

          });
        //}

        //    this.state = Res[0].state;
        //this.sg['products'] = Res.json()['Results'];
        //this.data.changeProducts(this.sg['products']);

      
    //}


  }

}




