import { Component, computed, inject, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsPeopleService } from '../../services/star-wars/star-wars-people.service';
import { StarwarsPersonComponent } from './starwars-person/starwars-person.component';

@Component({
  selector: 'hallpass-signal-input',
  standalone: true,
  imports: [CommonModule, StarwarsPersonComponent],
  templateUrl: './signal-input.component.html',
  styles: ':host { display: block; }'
})
export class SignalInputComponent {
  
  private peopleService = inject(StarWarsPeopleService);
  protected selectedFilm = model<string>();
  
  // --- COMPONENT PROPS --- //
  filteredPeople = computed(() => this.selectedFilm() 
      ? this.peopleService.people().filter(m => m.films.includes(this.selectedFilm() ?? ''))
      : this.peopleService.people()
  );  // List of people filtered by selected film
  films = this.peopleService.films;    // List of all films that this group of people have appeared in (unique film titles)

  handleSelectFilm(film: string) {
    this.selectedFilm.update(_ => film);
  }

  resetSelectedFilm() {
    this.selectedFilm.update(_ => undefined);
  }
}
