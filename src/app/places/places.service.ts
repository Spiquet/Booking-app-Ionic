import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class  PlacesService {

  public Places: Place[] = [
    new Place ('p1', 'Manhattan Mansion', 'In the hearth of New York', 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 100 ),
    new Place ('p2', 'Lorient', 'In the hearth of Bretagne', 'https://images.unsplash.com/photo-1598109399096-408676f5d2fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 100 ),
    new Place ('p3', 'Lorient', 'In the hearth of Bretagne', 'https://images.unsplash.com/photo-1598109399096-408676f5d2fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 100 )


  ];

  constructor() { }


  getPlaces() {
    return [...this.Places];
  }


  getPlace(id: string) {
    // Spread-Operator In order not to inherit the original object
    return {...this.Places.find(p => p.id === id)};
  }
}
