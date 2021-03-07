import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ActionSheetController, AlertController, ModalController} from 'ionic-angular';
import { LoginPage } from "../login/login";
import firebase from 'firebase';
import moment from 'moment';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
//import { runInThisContext } from 'vm';
import { HttpClient } from '@angular/common/http';
import { CommentsPage } from '../comments/comments'; 



@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html'
})
export class ForumPage {

  text: string = "";
  posts: any[] = [];
  pageSize: number = 10;
  cursor: any;
  infiniteEvent: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private loadingCtrl: LoadingController, private toastCtrl: ToastController,
    private camera: Camera, private http:HttpClient, private actionSheetCtrl:ActionSheetController,
    private alertCtrl: AlertController, private modalCtrl:ModalController){
    }

  getPosts(){
    
    let loading = this.loadingCtrl.create({
      content:"Loading ..."
    });

    loading.present();

   

    let query = firebase.firestore().collection("posts").orderBy("created","desc")
    .limit(this.pageSize);
    
    query.onSnapshot((snapshot)=>{
      let changedDocs = snapshot.docChanges();

      changedDocs.forEach((change)=>{
        if(change.type == "added"){
        }

        if(change.type == "modified"){
          for(let i = 0; i < this.posts.length; i++){
            if(this.posts[i].id == change.doc.id){
              this.posts[i] = change.doc;
            }
          }
        }

        if(change.type == "removed"){

        }
      })
    })

    query.get()
    .then((docs)=>{

      docs.forEach((doc)=>{
        this.posts.push(doc);
      })

      loading.dismiss();

      this.cursor = this.posts[this.posts.length - 1];

      console.log(this.posts)

    }).catch((err) => {
      console.log(err)
    })
  }

  loadMorePosts(event){
    firebase.firestore().collection("posts").orderBy("created","desc").startAfter
    (this.cursor).limit(this.pageSize).get()
    .then((docs)=>{

      docs.forEach((doc)=>{
        this.posts.push(doc);
      })

      console.log(this.posts)

      if(docs.size < this.pageSize){
        event.enable(false);
        this.infiniteEvent = event;
      }else{
        event.complete();
        this.cursor = this.posts[this.posts.length - 1];
      }

    }).catch((err) => {
      console.log(err)
    })
  }

  refresh(event){

    this.posts = [];

    this.getPosts();

    if(this.infiniteEvent){
      this.infiniteEvent.enable(true);
    }

    event.complete();

  }

  post(){

    this.posts = [];

    firebase.firestore().collection("posts").add({
      text:this.text,
      created:firebase.firestore.FieldValue.serverTimestamp(),
      owner:firebase.auth().currentUser.uid,
      owner_name:firebase.auth().currentUser.displayName
    }).then((doc) => {
      console.log(doc)
      
      this.text = "";

      let toast = this.toastCtrl.create({
        message: "Your post has been created successfully.",
        duration:3000
      }).present();
     

      this.getPosts()
    }).catch((err) => {
      console.log(err)
    })
  }

  ago(time){
    let difference = moment(time).diff(moment());
    return moment.duration(difference).humanize();
  }

  

  addPhoto(){

   this.launchCamera();
  }

  logout(){
    firebase.auth().signOut().then(() =>{

      let toast = this.toastCtrl.create({
        message:" You have been logged out successfully.",
        duration:3000
      }).present();

      this.navCtrl.setRoot(LoginPage)
    });
  }

  launchCamera(){
    let options: CameraOptions = {
      quality:100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 512,
      targetWidth:512,
      allowEdit:true
    }

    this.camera.getPicture(options).then((base64Image) => {
      console.log(base64Image);
    }).catch((err) => {
      console.log(err)
    })
  }

  like(post){

    let body = {
      postId:post.id,
      userId:firebase.auth().currentUser.uid,
      action:post.data().likes && post.data().likes[firebase.auth().currentUser.uid] == true ? "unlike": "like"
    }

    this.http.post("https://us-central1-beatsstudio-e1fdd.cloudfunctions.net/updateLikesCount", JSON.stringify(body),{
      responseType:"text"
    }).subscribe((data) => {
      console.log(data)
    },(error) => {
      console.log(error)
    })

  }

  comment(post){
    this.actionSheetCtrl.create({
      buttons:[
        {
          text:"View All Comment",
          handler:() => {
            this.modalCtrl.create(CommentsPage, {
              "post": post
            }).present();

          }
        },
        {
          text : "New Comment",
          handler : () => {

            this.alertCtrl.create({
              title:"New Comment",
              message: "Type your comment",
              inputs:[
                {
                  name:"comment",
                  type:"text"
                }
              ],
              buttons:[
                {
                  text:"Cancel"
                },
                {
                  text:"Post",
                  handler:(data) =>{
                    if(data.comment){

                      firebase.firestore().collection("comments").add({
                        text:data.comment,
                        post:post.id,
                        owner:firebase.auth().currentUser.uid,
                        owner_name: firebase.auth().currentUser.displayName,
                        created: firebase.firestore.FieldValue.serverTimestamp()
                    }).then((doc) => {
                      this.toastCtrl.create({
                        message:"Comment posted successfully.",
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
                }
              ]
            }).present();
            
          }
        }
      ]
    }).present();

  }
}
