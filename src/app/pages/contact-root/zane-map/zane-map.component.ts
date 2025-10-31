import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-zane-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './zane-map.component.html',
  styleUrls: ['./zane-map.component.scss'],
})
export class ZaneMapComponent {
  zoom = 15;
  center: google.maps.LatLngLiteral = { lat: 47.584317, lng: 21.726149 }; // Hajdúsámson coordinates
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPosition: google.maps.LatLngLiteral = { lat: 47.584317, lng: 21.726149 };
}
