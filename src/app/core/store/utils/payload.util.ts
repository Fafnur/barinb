import { props } from '@ngrx/store';
import { ActionCreatorProps } from '@ngrx/store/src/models';

export function payload<P>(): ActionCreatorProps<{ payload: P }> {
  return props<{ payload: P }>();
}

export function payloadOptional<P>(): ActionCreatorProps<{ payload?: P }> {
  return props<{ payload?: P }>();
}
