export default {
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/tests/**/*.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  testPathIgnorePatterns: ['helpers.js', 'ignored'],
  transformIgnorePatterns: ['node_modules/(?!(babel-jest|jest-vue-preprocessor)/)']
};
