import { RoomPreviewImagesPipe } from './room-preview-images.pipe';

describe('RoomPreviewImagesPipe', () => {
  let pipe: RoomPreviewImagesPipe;

  beforeEach(() => {
    pipe = new RoomPreviewImagesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return images', () => {
    const images = ['1', '2', '3', '4', '5', '6'];
    expect(pipe.transform(images).length).toBe(4);
  });

  it('should return single iamge', () => {
    const images = ['1', '2'];
    expect(pipe.transform(images)).toEqual(['2']);
  });

  it('should return nothing', () => {
    const images = ['1'];
    expect(pipe.transform(images).length).toBe(0);
  });

  it('should return slice images', () => {
    const images = ['1', '2', '3', '4', '5', '6'];
    expect(pipe.transform(images)).toEqual(['2', '3', '4', '5']);
  });
});
