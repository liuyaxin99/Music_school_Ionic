import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

 
  initializeItems() {
    this.items = [
      {
        'Question': 'Does your school believe in a holistic learning approach or only to impart performance skills to your students?',
        'Answer': 'We do not merely train our students in the necessary performance skills but help to coach them in other areas of proficiency, such as musicianship, pitch training, eye training and memorizing techniques. These skills will also help to develop creativity.'
      },
      {
        'Question': 'How does your music school maintain a childs interest?',
        'Answer': 'We have no less than 4 concerts a year with performing opportunities in shopping malls, libraries…etc. Apart from the concerts, we have masterclasses, informal ensemble playing and group classes. All these help to stimulate the childs interest when interacting with other peers.'
      },
      {
        'Question':'How quealified are your teachers?',
        'Answer':'Besides their basic qualification in music, Seimpi provides stringent training in music pedagogy to ensure that our teachers are able to deliver lessons effectively to all ages.'
      },
      {
        'Question':'Do your teachers undergo any further training?',
        'Answer':'With Beats Studio, our sister school which provide higher education programs, we have teacher training diplomas conducted. Our teachers consistently upgrade themselves.'
      }
     
     
    ];
  }
  getItems(ev) {
    this.initializeItems();

    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.Question.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  navigateToDetails(item){
    this.navCtrl.push('DetailsPage',{ item: item });
 }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Send Successfully!',
      subTitle: 'Thank you for your booking.We will contact you as soon as possible!',
      buttons: ['OK']
    });
    alert.present();
  }

}
