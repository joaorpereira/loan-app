module.exports = {
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["/node_modules/",],
	collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*.ts(x)?",
		"!src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
	moduleDirectories: ['node_modules', '.'],
	moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.ts"
  }
};
