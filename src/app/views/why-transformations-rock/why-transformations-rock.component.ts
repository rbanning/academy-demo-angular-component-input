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
  invites: string[] = ['Alice', 'Bob', 'Charlie'];
  newInvite = '';

  add() {
    this.invites.push(this.newInvite);
    this.newInvite = '';
  } 
  remove(name: string) {
    this.invites = this.invites.filter(m => m !== name);
  }

}
