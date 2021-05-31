import { PersonFullNamePipe } from './person-full-name.pipe';

describe('PersonFullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PersonFullNamePipe();
    expect(pipe).toBeTruthy();
  });
});
