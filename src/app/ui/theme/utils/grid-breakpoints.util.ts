export enum GridBreakpointType {
  Xs = '0',
  Nm = '320px',
  Mkm = '400px',
  Mm = '480px',
  Sm = '550px',
  Md = '768px',
  Lg = '992px',
  Xl = '1200px',
  Hg = '1400px',
  Xh = '1600px',
}

export enum GridBreakpointName {
  Xs = 'xs',
  Nm = 'nm',
  Mkm = 'mkm',
  Mm = 'mm',
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
  Hg = 'hg',
  Xh = 'xh',
}

export const GRID_BREAKPOINTS_NAMES = [
  GridBreakpointName.Xs,
  GridBreakpointName.Nm,
  GridBreakpointName.Mkm,
  GridBreakpointName.Sm,
  GridBreakpointName.Md,
  GridBreakpointName.Lg,
  GridBreakpointName.Xl,
  GridBreakpointName.Hg,
  GridBreakpointName.Xh,
];

export enum GridBreakpointsUp {
  Xs = '(min-width: 0)',
  Nm = '(min-width: 320px)',
  Mkm = '(min-width: 400px)',
  Mm = '(min-width: 480px)',
  Sm = '(min-width: 550px)',
  Md = '(min-width: 768px)',
  Lg = '(min-width: 992px)',
  Xl = '(min-width: 1200px)',
  Hg = '(min-width: 1400px)',
  Xh = '(min-width: 1600px)',
}

export enum GridBreakpointsDown {
  Xs = '(max-width: 319px)',
  Nm = '(max-width: 399px)',
  Mkm = '(max-width: 479px)',
  Mm = '(max-width: 549px)',
  Sm = '(max-width: 767px)',
  Md = '(max-width: 991px)',
  Lg = '(max-width: 1199px)',
  Xl = '(max-width: 1399px)',
  Hg = '(max-width: 1599px)',
  Xh = '(max-width: 9999px)',
}

export function mediaBreakpointUp(breakpoint: GridBreakpointType): string {
  return `(min-width: ${breakpoint})`;
}

export function mediaBreakpointDown(breakpoint: GridBreakpointType): string {
  return `(max-width: ${breakpoint})`;
}
