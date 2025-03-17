import { computed, inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { STAR_WARS_API_URL } from './star-wars-api.config';
import { IStarWarsPerson } from './star-wars-person.model';
import { IStarWarsArrayResponse } from './star-wars-array-response.model';
import { map } from 'rxjs';
import { IStarWarsFilm } from './star-wars-film.model';

@Injectable({
  providedIn: 'root'
})
export class StarWarsPeopleService {

  private urlPeople = `${STAR_WARS_API_URL}/people`;
  private urlFilms = `${STAR_WARS_API_URL}/films`;
  private http = inject(HttpClient);

  //NOTE: the API provides pages of people but we are only looking at the first page (to keep it simple)

  
  private peopleResource = rxResource({
    loader: () => this.http.get<IStarWarsArrayResponse<IStarWarsPerson>>(this.urlPeople)
        .pipe(
          map((resp) => resp.results)
        ),
  });
  private filmsResource = rxResource({
    loader: () => this.http.get<IStarWarsArrayResponse<IStarWarsFilm>>(this.urlFilms)
        .pipe(
          map((resp) => resp.results)
        ),
  });
  
  // --- SERVICE API --- //

  films = computed(() => this.filmsResource.value() ?? []);  // List of all films

  people = computed(() => (this.peopleResource.value() ?? [])
                        .map(person => {
                          return {
                            ...person,
                            films: person.films.map((filmUrl) => {
                              const film = this.films().find(film => film.url === filmUrl);
                              return film ? `${film.title} (ep.${film.episode_id})` : 'Unknown';
                            })
                          };
                        }));  // List of all people (with film titles instead of URLs)


}
