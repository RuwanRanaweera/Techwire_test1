import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Gem } from '../../gems/gem.model';

@Component({
  selector: 'app-create-biding',
  templateUrl: './create-biding.component.html',
  styleUrls: ['./create-biding.component.scss'],
})
export class CreateBidingComponent implements OnInit {
  @Input() selectedGem: Gem;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBidGem(){
    this.modalCtrl.dismiss({ message: 'This is a dummy message!' }, 'confirm');
  }


}
