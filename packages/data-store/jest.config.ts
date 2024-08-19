import {Config} from 'jest'

/* eslint-disable */
export default {
  displayName: 'data-store',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', {tsconfig: '<rootDir>/tsconfig.spec.json'}],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/data-store',
  passWithNoTests: true,
} as Config
