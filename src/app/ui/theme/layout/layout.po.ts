import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { LayoutComponent } from './layout.component';

enum LayoutAutomation {
  LayoutHeader = 'layout-header',
  LayoutMain = 'layout-main',
  LayoutFooter = 'layout-footer',
}

export class LayoutComponentPo extends PageObject<LayoutComponent> {
  get layoutHeader(): DebugElement | null {
    return this.getByAutomationId(LayoutAutomation.LayoutHeader);
  }

  get layoutMain(): DebugElement | null {
    return this.getByAutomationId(LayoutAutomation.LayoutMain);
  }

  get layoutFooter(): DebugElement | null {
    return this.getByAutomationId(LayoutAutomation.LayoutFooter);
  }
}
