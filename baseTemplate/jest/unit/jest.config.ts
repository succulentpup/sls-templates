import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    rootDir: '../../',
    roots: [
        '<rootDir>/src',
    ],
    coverageDirectory: '<rootDir>/jest/coverage',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts, tsx}',
        '!<rootDir>/src/**/*.test.{ts, tsx}',
        '!<rootDir>/src/tests/**/*',
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/test/.*|(\\.|/)(test|spec))\\.tsx?$',
    testEnvironment: 'node',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node',
    ],
    moduleNameMapper: {
        '^constants/(.*)$': '<rootDir>/src/constants/$1',
        '^helpers/(.*)$': '<rootDir>/src/helpers/$1',
        '^types/(.*)$': '<rootDir>/src/@types/$1',
        '^packageJson$': '<rootDir>/package.json',
    },
    globals: {
        'ts-jest': {
            packageJson: 'package.json',
            tsconfig: '<rootDir>/tsconfig.json'
        }
    },
    globalSetup: '<rootDir>/jest/unit/globalSetup.ts',
    // testPathIgnorePatterns: ['tests/integration']
};
export default config;

