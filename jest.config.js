module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: {
        before: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer'],
      },
    },
  },
  coverageDirectory: 'coverage',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  moduleNameMapper: {
    '@app/ui/theme/layout': ['<rootDir>/src/app/ui/theme/layout/index.ts'],
    '@app/ui/theme/utils': ['<rootDir>/src/app/ui/theme/utils/index.ts'],
    '@app/ui/icons': ['<rootDir>/src/app/ui/icons/index.ts'],
    '@app/ui/spinner': ['<rootDir>/src/app/ui/spinner/index.ts'],
    '@app/ui/carousel': ['<rootDir>/src/app/ui/carousel/index.ts'],
    '@app/core/common': ['<rootDir>/src/app/core/common/index.ts'],
    '@app/core/environments': ['<rootDir>/src/app/core/environments/index.ts'],
    '@app/core/logger': ['<rootDir>/src/app/core/logger/index.ts'],
    '@app/core/storage': ['<rootDir>/src/app/core/storage/index.ts'],
    '@app/core/store/root': ['<rootDir>/src/app/core/store/root/index.ts'],
    '@app/core/store/watcher': ['<rootDir>/src/app/core/store/watcher/index.ts'],
    '@app/core/store/utils': ['<rootDir>/src/app/core/store/utils/index.ts'],
    '@app/rooms/common': ['<rootDir>/src/app/rooms/common/index.ts'],
    '@app/rooms/storage': ['<rootDir>/src/app/rooms/storage/index.ts'],
    '@app/rooms/service': ['<rootDir>/src/app/rooms/service/index.ts'],
    '@app/rooms/state': ['<rootDir>/src/app/rooms/state/index.ts'],
    '@app/buildings/common': ['<rootDir>/src/app/buildings/common/index.ts'],
    '@app/buildings/storage': ['<rootDir>/src/app/buildings/storage/index.ts'],
    '@app/buildings/service': ['<rootDir>/src/app/buildings/service/index.ts'],
    '@app/buildings/state': ['<rootDir>/src/app/buildings/state/index.ts'],
    '@app/persons/common': ['<rootDir>/src/app/persons/common/index.ts'],
    '@app/persons/storage': ['<rootDir>/src/app/persons/storage/index.ts'],
    '@app/persons/service': ['<rootDir>/src/app/persons/service/index.ts'],
    '@app/persons/state': ['<rootDir>/src/app/persons/state/index.ts'],
    '@app/booking/common': ['<rootDir>/src/app/booking/common/index.ts'],
    '@app/booking/page': ['<rootDir>/src/app/booking/page/index.ts'],
    '@app/booking/service': ['<rootDir>/src/app/booking/service/index.ts'],
    '@app/booking/state': ['<rootDir>/src/app/booking/state/index.ts'],
    '@app/booking/shared': ['<rootDir>src/app/booking/shared/index.ts'],
    '@app/maps/common': ['<rootDir>/src/app/maps/common/index.ts'],
    '@app/maps/services': ['<rootDir>/src/app/maps/services/index.ts'],
    '@app/maps/shared': ['<rootDir>/src/app/maps/shared/index.ts'],
  },
};
