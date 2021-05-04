import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {
  @Input() mode!: 'flex' | 'flex-row';

  @HostBinding('class.is-flex') get isFlex(): boolean {
    return this.mode === 'flex';
  }

  @HostBinding('class.is-flex-row') get isFlexRow(): boolean {
    return this.mode === 'flex-row';
  }
}
