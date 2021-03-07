import { Component, ViewChild} from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LessonsPage } from '../pages/lessons/lessons';
import { LocationsPage } from '../pages/locations/locations';
import { ForumPage } from '../pages/forum/forum';
import { LoginPage } from '../pages/login/login';
import { NewsPage } from '../pages/news/news';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  go_to_home(Page){
    this.nav.setRoot(NewsPage);
  }

  go_to_lessons(Page){
    this.nav.setRoot(LessonsPage);
  }

  go_to_locations(Page){
    this.nav.setRoot(LocationsPage);
  }

  go_to_forum(Page){
    this.nav.setRoot(ForumPage);
  }

  go_to_about(Page){
    this.nav.setRoot(AboutPage);
  }

  go_to_news(Page){
    this.nav.setRoot(NewsPage);
  }

  
}

