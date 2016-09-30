import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {User} from '../../models/user';
import {Http,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Github} from '../../providers/github';
import {Menu} from '../menu/menu';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
  providers: [Github]
})
export class UserDetail {
  // @Input() hidden:boolean;
  username: string;
  user: User;
  repos: any;
  menuIsOpen: boolean = false;

  constructor(private nav: NavController, navParams: NavParams, public http: Http, github: Github) {
    this.username = navParams.get('username');
    this.user = new User();

    github.loadDetails(this.username)
      .then(user => {
        this.user = user;

        // récupération de la liste des repos de l'utilisateur
        github.getUserRepos(this.user.repos_url)
          .then(repos => {
            this.repos = repos;
            /*for(var i in this.repos){
                console.log("repos url = " + this.repos[i].html_url+"?files=1");
            }*/

          });

      });

  }

  ionViewDidLoad() {
    console.log('Hello UserDetail Page');
  }

  openRepo(url: string, name: string){
    window.open(url+"?files=1");
  }

  goToRepo(url: string){
    console.log("go to repo " + url);
    window.open(this.user.html_url);
  }

  goToRoot(){
    this.nav.setRoot(HomePage);
  }

  close(ev: any){
    console.log("close");
    //this.nav.pop();
    this.menuIsOpen = false;
  }
  openMenu(){
    //this.nav.push(Menu);
    console.log("menu visible");
    this.menuIsOpen = !this.menuIsOpen;
  }
}
