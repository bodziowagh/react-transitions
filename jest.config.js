module.exports = {
    "roots": [
        "<rootDir>/src",
        "<rootDir>/tests"
    ],
    "testMatch": [
        "<rootDir>/tests/**/*.spec.jsx",
        "<rootDir>/tests/**/*.spec.js"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ],
    "setupTestFrameworkScriptFile": "<rootDir>/enzyme.config.js",
    "transform": {
        "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
        "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
    },
    "collectCoverage": true,
    "collectCoverageFrom": [
        "<rootDir>/src/**/*.{ts,tsx}"
    ],
    "coverageDirectory": "coverage"
}
