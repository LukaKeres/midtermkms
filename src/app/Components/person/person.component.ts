import { Component } from '@angular/core';
import { Person } from '../../Interfaces/person';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  newperson: Person={
    username: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    postalCode: 0
  }

  people: Person[]=[];

  addPerson(){
    this.people.push(this.newperson);
    this.newperson={
      username: '',
      password: '',
      confirmPassword: '',
      address: '',
      city: '',
      state: '',
      postalCode: 0
    }
  }
}
