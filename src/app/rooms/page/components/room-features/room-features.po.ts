import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './room-features.component.spec';

enum RoomFeaturesAutomation {
  RoomFeatureTitleIcon = 'room-feature-title-icon',
  RoomFeatureTitleLabel = 'room-feature-title-label',
  RoomFeatureTitleValue = 'room-feature-title-value',
  RoomFeatureCleaningIcon = 'room-feature-cleaning-icon',
  RoomFeatureCleaningLabel = 'room-feature-cleaning-label',
  RoomFeatureCleaningValue = 'room-feature-cleaning-value',
  RoomFeaturePersonIcon = 'room-feature-person-icon',
  RoomFeaturePersonLabel = 'room-feature-person-label',
  RoomFeaturePersonValue = 'room-feature-person-value',
  RoomFeatureRulesIcon = 'room-feature-rules-icon',
  RoomFeatureRulesLabel = 'room-feature-rules-label',
  RoomFeatureRulesValue = 'room-feature-rules-value',
  RoomFeatureCancelIcon = 'room-feature-cancel-icon',
  RoomFeatureCancelLabel = 'room-feature-cancel-label',
}

export class RoomFeaturesComponentPo extends PageObject<WrapperComponent> {
  get roomFeatureTitleIconText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeatureTitleIcon);
  }

  get roomFeatureTitleLabelText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeatureTitleLabel);
  }

  get roomFeatureTitleValueText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeatureTitleValue);
  }

  get roomFeatureCleaningIconText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeatureCleaningIcon);
  }

  get roomFeatureCleaningLabelText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeatureCleaningLabel);
  }

  get roomFeatureCleaningValueText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeatureCleaningValue);
  }

  get roomFeaturePersonIconText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeaturePersonIcon);
  }

  get roomFeaturePersonLabelText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeaturePersonLabel);
  }

  get roomFeaturePersonValueText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeaturePersonValue);
  }

  get roomFeatureRulesIconText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeatureRulesIcon);
  }

  get roomFeatureRulesLabelText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeatureRulesLabel);
  }

  get roomFeatureRulesValueText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeatureRulesValue);
  }

  get roomFeatureCancelIconText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeatureCancelIcon);
  }

  get roomFeatureCancelLabelText(): string | null {
    return this.text(RoomFeaturesAutomation.RoomFeatureCancelLabel);
  }
}
