import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LessonsPage } from '../lessons/lessons';

@IonicPage()
@Component({
  selector: 'page-lesson1',
  templateUrl: 'lesson1.html',
})
export class Lesson1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack(){
    this.navCtrl.push(LessonsPage);
    
  }

}
