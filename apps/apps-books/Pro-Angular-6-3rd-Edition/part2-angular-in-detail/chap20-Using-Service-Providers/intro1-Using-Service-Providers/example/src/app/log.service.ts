import { Injectable, InjectionToken } from '@angular/core';
/* When using simple types as provider tokens, there is a chance that two different parts of the application will try to use the same token to identify different services, which means that the wrong type of object may be used to resolve dependencies and cause errors.To help work around this, Angular provides the InjectionToken class, which provides an object wrapper around a string value and can be used to create unique token values. In Listing 20-7, I have used the InjectionToken class to create a token that will be used to identify dependencies on the LogService class. */
export const LOG_SERVICE = new InjectionToken('logger');
export enum LogLevel {
  DEBUG,
  INFO,
  ERROR
}
@Injectable()
export class LogService {
  minimumLevel: LogLevel = LogLevel.INFO;
  logInfoMessage(message: string) {
    this.logMessage(LogLevel.INFO, message);
  }
  logDebugMessage(message: string) {
    this.logMessage(LogLevel.DEBUG, message);
  }
  logErrorMessage(message: string) {
    this.logMessage(LogLevel.ERROR, message);
  }
  logMessage(level: LogLevel, message: string) {
    if (level >= this.minimumLevel) {
      console.log(`Message (${LogLevel[level]}): ${message}`);
    }
  }
}
