import { Component, OnInit } from '@angular/core';
import { Person } from '../Models/person';
import { PeopleService } from '../Services/people.service';

@Component({
  selector: 'app-people-list',
  template: `<ul>
<li *ngFor="let person of people">
<p (click)="showSelected(person)">{{person.name}}</p>
</li>
</ul>
  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {
   selected:string;
  private peopleService: PeopleService;
  people: Person[] = [];

  constructor(peopleService: PeopleService) { 
     this.peopleService = peopleService;
    this.people = peopleService.getAll()
  }
   showSelected(item){
        this.selected = item;
    }


  ngOnInit() {
  }

}
