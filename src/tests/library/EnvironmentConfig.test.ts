import EnvironmentConfig from "../../library/EnvironmentConfig";
import MockProcessEnv from "../mocks/MockProcessEnv";

describe("test environment variable lookup for EnvironmentConfig", () => {
	it("should return correct API key", () => {
		const mockProcess = new MockProcessEnv("production", "kyobrien.io");
		mockProcess.API_KEY = "foo";
	});

	it("should have correct NODE_ENV", () => {
		const mockProcess = new MockProcessEnv("production", "kyobrien.io");

		const testConfig = new EnvironmentConfig(mockProcess);

		expect(testConfig.isProduction()).toBeTruthy();
		expect(testConfig.isDevelopment()).toBeFalsy();
	});
});
