/** @type {import('ts-jest').JestConfigWithTsJest} */
<<<<<<< HEAD
export default{
  preset: 'ts-jest',
  testEnvironment: 'node',
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },

=======
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
>>>>>>> 6cfe072809d2eac56d8aeae0043e2e5e2b22c448
};