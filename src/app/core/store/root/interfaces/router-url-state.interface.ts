import { Params } from '@angular/router';

export interface RouterUrlState {
  url: string;
  params: Params;
  queryParams: Params;
  data?: Record<string, any>;
}
