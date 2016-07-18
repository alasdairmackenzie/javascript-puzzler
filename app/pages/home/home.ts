import {Component} from '@angular/core';
import {NavController, Modal} from 'ionic-angular';
import {GamePage} from '../game/game';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {
    //this.openModal();
  }

  openModal() {
      let modal = Modal.create(GamePage);
      this.navController.present(modal);
    }
}
