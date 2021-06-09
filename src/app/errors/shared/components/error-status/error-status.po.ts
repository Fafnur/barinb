import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './error-status.component.spec';

enum ErrorStatusAutomation {
  ErrorStatus = 'error-status',
}

export class ErrorStatusComponentPo extends PageObject<WrapperComponent> {
  get errorStatus(): DebugElement | null {
    return this.getByAutomationId(ErrorStatusAutomation.ErrorStatus);
  }

  isErrorStatusClasses(className: string): boolean {
    return this.errorStatus?.classes[className] ?? false;
  }

  setColor(color: 'primary' | 'accent' | 'active' | 'danger'): void {
    this.fixture.componentInstance.color = color;
  }
}
