module.exports = {
  testEnvironment: 'jest-environment-jsdom-fourteen',
  moduleFileExtensions: [
    "js"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  testMatch: [
    "**/tests/**/*.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  testPathIgnorePatterns: [
    'helpers.js',
    'ignored',
  ],
  testURL: "http://localhost/",
 // testEnvironment: "node",
  transformIgnorePatterns: [
    "node_modules/(?!(babel-jest|jest-vue-preprocessor)/)"
  ],
  // coverageDirectory: 'coverage',
  // coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
  // collectCoverageFrom: [
  //   'src/**/*.js'
  // ],
  snapshotSerializers: [
    'jest-serializer-html',
  ],
};