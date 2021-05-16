import { PersonFullNamePipe } from './person-full-name.pipe';

describe('RoomPreviewImagesPipe', () => {
  it('create an instance', () => {
    const pipe = new PersonFullNamePipe();
    expect(pipe).toBeTruthy();
  });
});
