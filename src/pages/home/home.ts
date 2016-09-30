import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserDetail} from '../user-detail/user-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string = "gsoulie";
  password: string = "";

  constructor(public navCtrl: NavController) {    
  }

  login(){/*
    let body = JSON.stringify("gsoulie:#\Sin5846");
    let headers = new Headers({ 'Content-Type': 'application/json' ,
                              "Accept": "application/json"});
    let options = new RequestOptions({ headers: headers });
    
    this.http.post("https://api.github.com/users/gsoulie",body,options)
    .subscribe(data => {
      console.log("result = " + JSON.stringify(data));
    }, error => {
      console.log("ERROR : " + JSON.stringify(error));
    })*/
    
    if(navigator.onLine){
      this.navCtrl.setRoot(UserDetail,{username: this.username});
      //this.navCtrl.push(UserDetail,{username: this.username});
    } else {
      alert("No internet connection available. Please connect to Internet before.");
    }
    
  }
}
