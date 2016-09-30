import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserDetail } from '../pages/user-detail/user-detail';
import { Menu } from '../pages/menu/menu';
import { Github } from '../providers/github';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserDetail,
    Menu
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserDetail,
    Menu
  ],
  providers: [
    Github
  ]
})
export class AppModule {}
