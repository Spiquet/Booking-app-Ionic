import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;


  constructor(private navController: NavController,
              private modalCtrl: ModalController, private placesService: PlacesService,
              private route: ActivatedRoute,
              ) { }



  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navController.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    // Angular Style
    // this.router.navigateByUrl('/places/tabs/discover');

    // IonicStyle
    // this.navController.navigateBack('/places/tabs/discover');

    // ModalController allow to open modal by pointing to the desired compoment: here createBooking
    this.modalCtrl.create({component :  CreateBookingComponent, componentProps: {selectedPlace : this.place}}).then(modalEl =>  {
modalEl.present();
return modalEl.onDidDismiss();

    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('BOOKED!');
      }
    });





  }
}
