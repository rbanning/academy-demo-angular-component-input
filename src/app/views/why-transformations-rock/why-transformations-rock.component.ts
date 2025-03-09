import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayInvitationsComponent } from './display-invitations/display-invitations.component';

@Component({
  selector: 'hallpass-why-transformations-rock',
  standalone: true,
  imports: [CommonModule, FormsModule, DisplayInvitationsComponent],
  templateUrl: './why-transformations-rock.component.html',
  styles: ':host { display: block; }'
})
export class WhyTransformationsRockComponent {
  invites: string[] = ['Charlie', 'Alice','Bob' ];
  newInvite = '';

  resetArrayOnAdd = false;

  add() {
    if (this.resetArrayOnAdd) {
      this.invites = [
        ...this.invites,
        this.newInvite
      ];                                  // reassign the array                       
    }
    else {
      this.invites.push(this.newInvite);  //mutate the array
    }
    this.newInvite = '';
  } 
  remove(name: string) {
    if (this.resetArrayOnAdd) {
      this.invites = this.invites.filter(m => m !== name);  // reassign the array
    }
    else {
      const index = this.invites.indexOf(name);
      if (index > -1) {
        this.invites.splice(index, 1); // mutate the array
      }
    }
  }

}
