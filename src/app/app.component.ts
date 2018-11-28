import { Component, OnInit, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
// import {googlemaps} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone, } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'map';
    @ViewChild('places') places: GooglePlaceDirective;
    @ViewChild('search' ) public searchElement: ElementRef;
    lat: number = -33.785809;
    lng: number = 151.121195;
    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {  }
    public handleAddressChange(address: Address) {
        console.log(address.geometry.location.lng());
        console.log(address.geometry.location.lat());
        console.log(address.geometry.location.toJSON());
        console.log(address.geometry.viewport.getNorthEast());
        this.lng = address.geometry.location.lng();
        this.lat  = address.geometry.location.lat();
    }
}
