import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss']
})
export class PlaceDetailPage implements OnInit {
    constructor(private navCtrl: NavController, private modalController: ModalController) {}

    ngOnInit() {}

    onBookPlace(): void {
        // We use this instead of the angular router to ensure the proper
        // moveForward or moveBackward animation is utilized and displayed to the user
        // this.navCtrl.navigateBack('/places/tabs/discover');
        this.modalController
            .create({ component: CreateBookingComponent })
            .then((modalElement) => modalElement.present());
    }
}
