import { exception } from "console";
import IEnvironmentConfig from "./IEnvironmentConfig";

export default class EnvironmentConfig implements IEnvironmentConfig {
	envManager: NodeJS.ProcessEnv;

	constructor(envNodeProcess: NodeJS.ProcessEnv) {
		this.envManager = envNodeProcess !== null ? envNodeProcess : process.env;
	}

	isProduction(): boolean {
		if (this.envManager.NODE_ENV === undefined) {
			throw exception("NODE_ENV  env var is not defined ");
		}

		return this.envManager.NODE_ENV.toLowerCase() === "production";
	}

	isDevelopment(): boolean {
		if (this.envManager.NODE_ENV === undefined) {
			throw exception("NODE_ENV  env var is not defined ");
		}

		return this.envManager.NODE_ENV.toLowerCase() === "development";
	}

	getEnvVariable(variableName: string): string | undefined {
		return this.envManager[variableName];
	}
}
