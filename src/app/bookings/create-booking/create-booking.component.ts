import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from '../../places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {



  constructor( private modalCtrl: ModalController) { }
  // Here same name that in the place-detail page
  @Input() selectedPlace: Place;



  ngOnInit() {}

  onBookPlace() {

    this.modalCtrl.dismiss({message : 'Test message'},  'confirm');

  }

  onCancel() {

    this.modalCtrl.dismiss(null, 'cancel');

  }
}
