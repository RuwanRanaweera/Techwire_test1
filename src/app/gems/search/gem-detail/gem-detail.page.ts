import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { CreateBidingComponent } from '../../../biding/create-biding/create-biding.component';
import { Gem } from '../../gem.model';
import { GemsService } from '../../gems.service';

@Component({
  selector: 'app-gem-detail',
  templateUrl: './gem-detail.page.html',
  styleUrls: ['./gem-detail.page.scss'],
})
export class GemDetailPage implements OnInit {
  gem: Gem;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private gemsService: GemsService,
    private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('gemId')){
        this.navCtrl.navigateBack('/gems/tabs/search');
        return;
      }
      this.gem = this.gemsService.getGem(paramMap.get('gemId'));
    });
  }
  onBidGem() {
    // this.router.navigateByUrl('/gems/tabs/search');
    // this.navCtrl.navigateBack('/gems/tabs/search');
    this.actionSheetCtrl.create({
      header: 'Choose an Action',
      buttons: [
        {
        text: 'Select Time',
        handler: () => {
          this.openBidModal('select');
        }
      },
      {
        text: 'Random Time',
        handler: () => {
          this.openBidModal('select');
        }

      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });

  }
  openBidModal(mode: 'select' | 'random'){
    console.log(mode);
    this.modalCtrl
    .create({
      component: CreateBidingComponent,
      componentProps: {selectedGem: this.gem}
    })
    .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('BIDED!');
      }
    });
  }
}
