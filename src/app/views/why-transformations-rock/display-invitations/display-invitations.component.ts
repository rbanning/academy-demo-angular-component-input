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
  styles: ':host { display: block; }',
  // changeDetection: ChangeDetectionStrategy.OnPush      //best practice would be to use OnPush but additions are not detected unless the array is reassigned
                                                          // this is because the array is mutated and not reassigned
})
export class DisplayInvitationsComponent {
  @Input({
    transform: (value: string[]) => {
     value.sort((a, b) => a.localeCompare(b));
     return value; 
    }
  }) who: string[] = [];
  @Output() remove = new EventEmitter<string>();

  icon = {
    envelope: faEnvelope,
    remove: faXmark
  };

  handleRemoveRequest(name: string) {
    this.remove.emit(name);
  }
}
