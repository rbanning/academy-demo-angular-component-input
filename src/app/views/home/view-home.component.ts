import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hallpass-view-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-home.component.html',
  styles: ':host { display: block; }'
})
export class ViewHomeComponent {

  constructor() { 
    console.log('ViewHomeComponent constructor');
  }

}
