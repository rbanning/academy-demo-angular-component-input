import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faWebAwesome } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle as faNotAwesome,
  faLemon as faFood, faPenToSquare as faColor
 } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'hallpass-list-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './list-item.component.html',
  styles: ':host { display: block; }'
})
export class ListItemComponent {

  // REQUIRED INPUT...
  // name is required
  @Input({ required: true }) name!: string;


  // ALIAS INPUT...
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('color') favoriteColor? = 'none'; //optional
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input({ required: true, alias: 'food' }) favoriteFood!: string; //required


  // GETTER/SETTER...
  // friends should be sorted and each name must be unique.
  private _friends: string[] = [];
  @Input()
  get friends(): string[] {
    return this._friends;
  }
  set friends(value: string[]) {
    this._friends = value.map(f => f.trim())
      .filter(Boolean)
      .filter((f, i, arr) => arr.indexOf(f) === i);
    this._friends.sort((a,b) => a.localeCompare(b));
  }


  // TRANSFORMATIONS ...
  @Input({ transform: (value: string) => value.toLocaleLowerCase().trim() })
  username: string = '';

  // built in transformations...
  @Input({ transform: booleanAttribute}) awesome = false;
  @Input({ transform: numberAttribute}) likes = 0;


  icons = {
    likes: faHeart,
    awesome: faWebAwesome,
    notAwesome: faNotAwesome,
    food: faFood,
    color: faColor
  }
}
