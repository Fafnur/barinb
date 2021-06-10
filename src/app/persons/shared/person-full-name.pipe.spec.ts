import { PERSON_STUB } from '@app/persons/state';

import { PersonFullNamePipe } from './person-full-name.pipe';

describe('PersonFullNamePipe', () => {
  let pipe: PersonFullNamePipe;

  beforeEach(() => {
    pipe = new PersonFullNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    expect(pipe.transform(PERSON_STUB)).toBe(`${PERSON_STUB.firstName} ${PERSON_STUB.lastName}`);
  });
});
