import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class Menu {

  constructor(public navCtrl: NavController,private viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello Menu Page');
  }
  close(){this.viewCtrl.dismiss();}
  add(){alert("ajout");}

}
