export enum NumeralType {
  Guest = 'guest',
  Bedroom = 'bedroom',
  Bathroom = 'bathroom',
  Bed = 'bed',
}

export const NUMERAL_TYPES_FORMS: Record<NumeralType, [string, string, string]> = {
  [NumeralType.Guest]: ['гость', 'гостя', 'гостей'],
  [NumeralType.Bedroom]: ['спальня', 'спальни', 'спален'],
  [NumeralType.Bathroom]: ['ванная', 'ванные', 'ванных'],
  [NumeralType.Bed]: ['кровать', 'кровати', 'кроватей'],
};
