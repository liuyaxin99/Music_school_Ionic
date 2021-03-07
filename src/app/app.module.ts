import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera/ngx';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { NewsPage } from '../pages/news/news';
import { LessonsPage } from '../pages/lessons/lessons';
import { LocationsPage } from '../pages/locations/locations';
import { ForumPage } from '../pages/forum/forum';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { Lesson1Page } from '../pages/lesson1/lesson1';
import { CommentsPage } from '../pages/comments/comments';
//import { DetailsPage} from '../pages/details/details';
import firebase from 'firebase';
import { DetailsPageModule } from '../pages/details/details.module';

var config = {
apiKey: "AIzaSyARzc3aj6pbfimR7mCXFkUcD1uDWQ7Hbdk",
    authDomain: "beatsstudio-e1fdd.firebaseapp.com",
    databaseURL: "https://beatsstudio-e1fdd.firebaseio.com",
    projectId: "beatsstudio-e1fdd",
    storageBucket: "",
    messagingSenderId: "886491635841"
};

firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots:true
})

@NgModule({
  declarations: [
    MyApp,
    LessonsPage,
    LocationsPage,
    ForumPage,
    LoginPage,
    SignupPage,
    AboutPage,
    Lesson1Page,
    NewsPage,
    CommentsPage,
   // DetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    DetailsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LessonsPage,
    LocationsPage,
    ForumPage,
    LoginPage,
    SignupPage,
    AboutPage,
    Lesson1Page,
    NewsPage,
    CommentsPage,
   // DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  
}

