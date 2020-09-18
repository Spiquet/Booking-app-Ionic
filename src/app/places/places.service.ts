import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private Places = [];

  constructor() { }


  getPlaces() {
    return [...this.Places];
  }
}
