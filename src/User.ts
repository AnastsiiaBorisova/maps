import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';


export class User implements Mappable{
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerColor: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.markerColor;
  }
  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
