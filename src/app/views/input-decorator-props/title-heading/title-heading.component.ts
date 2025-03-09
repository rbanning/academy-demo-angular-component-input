import { Component, HostBinding, Input, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pipe } from '../../../common';

export const sectionNames = ['primary', 'secondary', 'aside'] as const;
export type Section = typeof sectionNames[number];

function isSection(value: string): value is Section {
  return sectionNames.includes(value as Section);
}
function toSection(value?: "" | Section | number): Section | undefined {
  if (typeof value === 'string') {
    return value === ""
      ? 'primary'
      : isSection(value)
        ? value
        : undefined;
  }
  else if (typeof value === 'number' && value >= 0 && value < sectionNames.length) {
    return sectionNames[value];
  }
  return undefined;
}

function toElevation(value?: number): number {
  return typeof value === 'number' 
    ? Math.max(0, Math.min(4, Math.floor(value))) // clamp to 0-4 as integer 
    : 0;
}


@Component({
  selector: 'hallpass-title-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-heading.component.html',
  styles: ':host { display: flex; align-items: center; padding: 0.5rem; border-radius: 0.5rem; }',
})
export class TitleHeadingComponent {
  @Input({alias: 'pageTitle', required: true})
  title!: string;

  @Input({ 
    transform: toSection,
  })
  section?: Section;

  @Input({
    transform: (value?: string | number) => pipe(value, numberAttribute, toElevation),
  })
  elevation: number = 0;

  @HostBinding('class')
  get class() {
    let elevationClass = '';
    if (this.elevation > 0) {
      switch (this.elevation) {
        case 1: elevationClass = 'shadow-sm'; break;
        case 2: elevationClass = 'shadow'; break;
        case 3: elevationClass = 'shadow-md'; break;
        case 4: elevationClass = 'shadow-lg'; break;
        default: elevationClass = 'shadow-none'; break;
      }
    }

    switch (this.section) {
      case 'primary': return `bg-teal-100 text-teal-800 ${elevationClass}`;
      case 'secondary': return `bg-amber-100 text-amber-800 ${elevationClass}`;
      case 'aside': return `bg-gray-100 text-gray-800 ${elevationClass}`;
      default: return ''; // no section, no elevation
    }
  }


}
