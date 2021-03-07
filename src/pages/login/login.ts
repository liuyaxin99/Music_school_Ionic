import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { NewsPage } from '../news/news';
import firebase from 'firebase';
import { MyApp } from '../../app/app.component';
import { ForumPage } from '../forum/forum';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  email: string = "";
  password: string = "";
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then((user) => {
      console.log(user)

      this.toastCtrl.create({
      message:"Welcome  " + user.user.displayName,
      duration: 3000 
      }).present();
      this.navCtrl.push(NewsPage);

    }).catch((err) => {
      console.log(err)
      this.toastCtrl.create({
        message:err.message,
        duration: 3000 
        }).present();

    })
  }

  gotoSignup(){
    this.navCtrl.push(SignupPage);
  }

  gotoNews(){
    this.navCtrl.push(NewsPage)
  }


}
