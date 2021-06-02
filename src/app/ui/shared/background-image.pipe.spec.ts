import { BackgroundImagePipe } from './background-image.pipe';

describe('BackgroundImagePipe', () => {
  let pipe: BackgroundImagePipe;

  beforeEach(() => {
    pipe = new BackgroundImagePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return null for null', () => {
    expect(pipe.transform(null)).toBeNull();
  });

  it('should return null for empty string', () => {
    expect(pipe.transform('')).toBeNull();
  });

  it('should return correct prop with backgroundImage', () => {
    expect(pipe.transform('1.jpg')).toEqual({ backgroundImage: 'url(1.jpg)' });
  });
});
