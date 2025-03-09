import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPerson } from '../../models';
import { peopleRepo } from '../../repos';
import { ListItemComponent } from './list-item/list-item.component';
import { TitleHeadingComponent } from './title-heading/title-heading.component';

@Component({
  selector: 'hallpass-view-input-decorator-props',
  standalone: true,
  imports: [CommonModule, ListItemComponent, TitleHeadingComponent],
  templateUrl: './view-input-decorator-props.component.html',
  styles: ':host { display: block; }'
})
export class ViewInputDecoratorPropsComponent {

  people: IPerson[] = [];

  constructor() {
    this.people = peopleRepo;
  }

}
