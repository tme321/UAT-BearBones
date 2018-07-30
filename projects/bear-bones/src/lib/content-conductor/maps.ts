import { Component, Injectable } from '@angular/core';

@Component({
    selector: 'map',
    template: ``
})
export class MapComponent {
    positions: MapService;
    ngOnInit() {
        this.positions.mapReset(); //this is to set the default value when it                                 
        this.positions.dataRefresh(); //This is for the api data for left side
        this.positions.driverRefresh(); //this is for api data for right side
    }    
}

@Component({
    selector: 'header'
})
export class HeaderComponent {
    positions: MapService;

    latitude:number;
    longitude:number;

    resetMap() {
        this.positions.mapRecenter(this.latitude, this.longitude);
    } //positions is the name of the service
}

@Injectable() 
export class MapService {
    zoom: number;
    lat: number;
    lng: number;
    isZoomIn: boolean;

    driverRefresh(): any {
        throw new Error("Method not implemented.");
    }

    dataRefresh(): any {
        throw new Error("Method not implemented.");
    }

    mapReset(): any {
        throw new Error("Method not implemented.");
    }

    mapRecenter(latitude: number, longitude: number) {
        if (latitude != 3.16 && longitude != 101.71 && this.zoom == 8){
            this.dataRefresh();
            this.lat = Number(latitude);
            this.lng = Number(longitude);
            this.zoom = 15;
            this.isZoomIn = true;
        }
         else if (
            latitude != 3.16 &&
            longitude != 101.71 &&
            this.zoom != 8
        ) {
            this.dataRefresh();
            this.lat = Number(latitude);
            this.lng = Number(longitude);
            this.zoom = 15;
            this.isZoomIn = true;
            console.log("zoom not 8");
        } else if (
            latitude == 3.16 &&
            longitude == 101.71 &&
            this.zoom != 8
        ) {
            this.dataRefresh();
            this.mapReset();
            this.isZoomIn = false;
            console.log("zoom not 8 and lat and lng in diffault");
        } else {
            // this.dataRefresh();
            // this.mapReset();
            console.log(this.zoom);
            this.zoom = 8;
           
        }
    }    
}