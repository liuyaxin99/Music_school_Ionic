import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NewsPage } from '../news/news';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  name:string = "";
  email: string = "";
  password: string = "";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  signup(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    .then((data)=>{

      let newUser: firebase.User = data.user;
      newUser.updateProfile({
        displayName: this.name,
        photoURL:""
      }).then(()=>{
        console.log("Profile Updated")

        this.alertCtrl.create({
          title:"Account Created",
          message:"your account has been created successfully.",
          buttons:[
            {
              text:"ok",
              handler:() => {
                this.navCtrl.push(NewsPage);
              }
            }
          ]
        }).present();
      }).catch((err) =>{
        console.log(err)
      })

    console.log(data)
  }).catch((err) => {
    console.log(err)
    this.toastCtrl.create({
      message: err.message,
      duration: 3000 
      }).present();
  })
  }

  goBack(){
    this.navCtrl.push(LoginPage);
  }

}
