import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './spinner.component.spec';

enum SpinnerAutomation {
  Spinner = 'spinner',
}

export class SpinnerComponentPo extends PageObject<WrapperComponent> {
  get spinner(): DebugElement | null {
    return this.getByAutomationId(SpinnerAutomation.Spinner);
  }
}
