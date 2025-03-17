import { Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStarWarsPerson } from '../../../services/star-wars/star-wars-person.model';

@Component({
  selector: 'hallpass-starwars-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starwars-person.component.html',
  styles: ':host { display: block; }'
})
export class StarwarsPersonComponent {

  // I/O
  person = input<IStarWarsPerson>();
  selectFilm = output<string>();
  
  // --- COMPONENT PROPS --- //
  exists = computed(() => !!this.person());
  name = computed(() => this.person()?.name ?? 'Unknown');
  films = computed(() => this.person()?.films ?? []);


}
