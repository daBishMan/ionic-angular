import {Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
    constructor(private navCtrl: NavController) {}

    ngOnInit() {}

    onBookPlace(): void {
        // We use this instead of the angular router to ensure the proper
        // moveForward or moveBackward animation is utilized and displayed to the user
        this.navCtrl.navigateBack('/places/tabs/discover');
    }
}
