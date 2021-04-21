export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;

  phone: string;
  buildings: number[];
  avatar?: string;
}
