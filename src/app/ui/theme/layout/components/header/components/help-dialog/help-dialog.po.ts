import { PageObject } from '@app/core/testing';

import { HelpDialogComponent } from './help-dialog.component';

enum HelpDialogAutomation {
  HelpDialogTitle = 'help-dialog-title',
  HelpDialogContent = 'help-dialog-content',
  HelpDialogClose = 'help-dialog-close',
}

export class HelpDialogComponentPo extends PageObject<HelpDialogComponent> {
  get helpDialogTitleText(): string | null {
    return this.text(HelpDialogAutomation.HelpDialogTitle);
  }

  get helpDialogContentText(): string | null {
    return this.text(HelpDialogAutomation.HelpDialogContent);
  }

  get helpDialogCloseText(): string | null {
    return this.text(HelpDialogAutomation.HelpDialogClose);
  }
}
