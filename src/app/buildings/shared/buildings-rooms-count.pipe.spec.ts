import { BuildingsRoomsCountPipe } from './buildings-rooms-count.pipe';

describe('BuildingsRoomsCountPipe', () => {
  let pipe: BuildingsRoomsCountPipe;

  beforeEach(() => {
    pipe = new BuildingsRoomsCountPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return count for empty', () => {
    const buildings = [{ rooms: [] }] as any;
    expect(pipe.transform(buildings)).toBe(0);
  });

  it('should return single room', () => {
    const buildings = [{ rooms: [1] }] as any;
    expect(pipe.transform(buildings)).toBe(1);
  });

  it('should return multy rooms', () => {
    const buildings = [{ rooms: [1] }, { rooms: [1, 2] }] as any;
    expect(pipe.transform(buildings)).toBe(3);
  });
});
