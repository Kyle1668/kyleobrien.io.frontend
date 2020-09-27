export default class MockProcessEnv implements NodeJS.ProcessEnv {
	[key: string]: string | undefined;

	NODE_ENV: "development" | "production" | "test";

	PUBLIC_URL: string;

	constructor(env: "development" | "production" | "test", url: string) {
		this.NODE_ENV = env;
		this.PUBLIC_URL = url;
	}
}
