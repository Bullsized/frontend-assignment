var preset = require("jest-preset-angular/jest-preset");
module.exports = {
  ...preset,
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["./setupJest.js"],
  testMatch: ["**/*.spec.ts"],
  globals: {
    ...preset.globals,
    "ts-jest": {
      ...preset.globals["ts-jest"],
      tsConfig: "src/tsconfig.test.json",
      isolatedModules: true,
    },
  },
};
