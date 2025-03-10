import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsPeopleService } from '../../services/star-wars/star-wars-people.service';

@Component({
  selector: 'hallpass-signal-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-input.component.html',
  styles: ':host { display: block; }'
})
export class SignalInputComponent {
  
  private peopleService = inject(StarWarsPeopleService);

  // --- COMPONENT PROPS --- //
  people = this.peopleService.people;  // List of all people
  films = this.peopleService.films;    // List of all films that this group of people have appeared in (unique film titles)

}
