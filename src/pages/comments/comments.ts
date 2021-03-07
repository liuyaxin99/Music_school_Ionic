import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ToastController} from 'ionic-angular';
import firebase from 'firebase';
import moment from "moment";


@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  post: any = {};
  comments : any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, 
    public alertCtrl:AlertController,private toastCtrl: ToastController) {
    this.post = this.navParams.get("post");
    console.log(this.post)

    firebase.firestore().collection("comments")
    .where("post", "==", this.post.id)
  //  .orderBy("created","asc")
    .get()
    .then((data) => {
      this.comments = data.docs;
    }).catch((err) => {
      console.log(err)
    })
  }

close(){
    this.viewCtrl.dismiss(); 
}

ago(time){
  let difference = moment(time).diff(moment());
  return moment.duration(difference).humanize();
}

editComment(comment){
  let prompt = this.alertCtrl.create({
    title: 'Edit Comment',
    inputs: [{name: 'comment',value:comment.data().text}],
    buttons: [{text: 'Cancel'},
                   {text: 'Save',
                    handler: data => {
                      if(data.comment){
                        console.log(comment)
                        firebase.firestore().doc('comments/' + comment.id).update({
                          text:data.comment,
                          
                      })
                        .then((doc) => {
                          this.toastCtrl.create({
                            message:"Comment updated successfully.",
                            duration:3000
                          }).present();
                        }).catch((err) => {
                          this.toastCtrl.create({
                            message:err.message,
                            duration:3000
                          }).present();
                        })
                      }
                    }}]});

prompt.present();
                    }





deleteComment(comment){

  firebase.firestore().doc('comments/' + comment.id).delete().then((doc) => {
    this.toastCtrl.create({
      message:"Comment deleted successfully.",
      duration:3000
    }).present();
  }).catch((err) => {
    this.toastCtrl.create({
      message:err.message,
      duration:3000
    }).present();
  })
}
  
}



                  


