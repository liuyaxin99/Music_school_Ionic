import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";
import { AboutPage } from '../about/about';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  vid = 'https://www.youtube.com/embed/Q1FW25aLzPE'
  constructor(public navCtrl: NavController, public navParams: NavParams, private dom:DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  sanitize(vid){
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

  goForm(){
    this.navCtrl.push(AboutPage);
 }
}
