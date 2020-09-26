import IEnvironmentConfig from "./IEnvironmentConfig";

export default class EnvironmentConfig implements IEnvironmentConfig {
  envManager: NodeJS.ProcessEnv;

  EnvironmentConfig(envNodeProcess: NodeJS.ProcessEnv = null) {
    this.envManager = envNodeProcess !== null ? envNodeProcess : process.env;
  }

  isProduction(): boolean {
    return this.envManager.NODE_ENV === "PROD";
  }

  isDevelopment(): boolean {
    return this.envManager.NODE_ENV === "DEV";
  }

  getEnvVariable(variableName: string): string {
    return this.envManager[variableName];
  }
}
