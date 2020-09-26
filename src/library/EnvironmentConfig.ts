import IEnvironmentConfig from "./IEnvironmentConfig";

export default class EnvironmentConfig implements IEnvironmentConfig {
  isProduction(): boolean {
    return true;
  }

  isDevelopment(): boolean {
    return true;
  }

  getEnvVariable(variableName: string): string {
    const value: string = process.env[variableName];
    return value;
  }
}
