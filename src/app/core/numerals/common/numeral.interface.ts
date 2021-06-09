export enum NumeralType {
  Guest = 'guest',
  Bedroom = 'bedroom',
  Bathroom = 'bathroom',
  Bed = 'bed',
  Currency = 'currency',
  Night = 'night',
}

export const NUMERAL_TYPES_FORMS: Record<NumeralType, [string, string, string]> = {
  [NumeralType.Guest]: ['гость', 'гостя', 'гостей'],
  [NumeralType.Bedroom]: ['спальня', 'спальни', 'спален'],
  [NumeralType.Bathroom]: ['ванная', 'ванные', 'ванных'],
  [NumeralType.Bed]: ['кровать', 'кровати', 'кроватей'],
  [NumeralType.Currency]: ['рубль', 'рубля', 'рублей'],
  [NumeralType.Night]: ['ночь', 'ночи', 'ночей'],
};
