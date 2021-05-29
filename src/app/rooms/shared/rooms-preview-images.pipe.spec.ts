import { RoomsPreviewImagesPipe } from './rooms-preview-images.pipe';

describe('RoomsPreviewImagesPipe', () => {
  let pipe: RoomsPreviewImagesPipe;

  beforeEach(() => {
    pipe = new RoomsPreviewImagesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return images', () => {
    expect(pipe.transform([]).length).toBe(0);
    expect(pipe.transform([{ photos: ['1'] }] as any).length).toBe(1);
    expect(pipe.transform([{ photos: ['1'] }, { photos: ['2', '3'] }] as any).length).toBe(3);
  });
});
