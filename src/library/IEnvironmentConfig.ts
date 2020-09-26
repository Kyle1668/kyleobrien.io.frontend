export default interface IEnvironmentConfig {
  isProduction(): boolean;

  isDevelopment(): boolean;

  getEnvVariable(variableName: string): string;
}
