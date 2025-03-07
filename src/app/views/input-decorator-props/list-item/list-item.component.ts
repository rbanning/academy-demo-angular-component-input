import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hallpass-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styles: ':host { display: block; }'
})
export class ListItemComponent {
  @Input() name!: string;

}
