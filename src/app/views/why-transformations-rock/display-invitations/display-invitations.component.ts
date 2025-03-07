import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hallpass-display-invitations',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './display-invitations.component.html',
  styles: ':host { display: block; }'
})
export class DisplayInvitationsComponent {
  @Input() who: string[] = [];
  @Output() remove = new EventEmitter<string>();

  icon = {
    envelope: faEnvelope,
    remove: faXmark
  };

  handleRemoveRequest(name: string) {
    this.remove.emit(name);
  }
}
