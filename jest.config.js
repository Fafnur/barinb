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
    '@app/ui/icons': ['<rootDir>/src/app/ui/icons/index.ts'],
    '@app/core/common': ['<rootDir>/src/app/core/common/index.ts'],
    '@app/core/storage': ['<rootDir>/src/app/core/storage/index.ts'],
    '@app/core/store/root': ['<rootDir>/src/app/core/store/root/index.ts'],
    '@app/core/store/watcher': ['<rootDir>/src/app/core/store/watcher/index.ts'],
    '@app/core/store/utils': ['<rootDir>/src/app/core/store/utils/index.ts'],
  },
};
