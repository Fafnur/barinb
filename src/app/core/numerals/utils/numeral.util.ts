export function numeralToWord(count: number, declensionForms: [string, string, string]): string {
  const remainderOfHundred = Math.abs(count) % 100;
  const remainderOfTen = remainderOfHundred % 10;

  if (remainderOfHundred > 10 && remainderOfHundred < 20) {
    return declensionForms[2];
  }
  if (remainderOfTen > 1 && remainderOfTen < 5) {
    return declensionForms[1];
  }
  if (remainderOfTen === 1) {
    return declensionForms[0];
  }

  return declensionForms[2];
}
