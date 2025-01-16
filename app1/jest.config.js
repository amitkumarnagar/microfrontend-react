module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    ".(ts|tsx)": "ts-jest",
    ".(css|scss)$": "<rootDir>/src/__mocks__/styleMock.js",
  },
  coveragePathIgnorePatterns: ["/node_modules/", "/coverage", "package.json", "pnpm-lock.json", "index.ts"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
