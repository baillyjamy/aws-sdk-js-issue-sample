import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';

@Injectable()
export class AwsService {

  constructor() { }

  public Init() {
    return new Promise<void>((resolve, reject) => {
      AWS.config.credentials = new AWS.ECSCredentials({
        httpOptions: { timeout: 5000 },
        maxRetries: 10,
      });
      resolve();
    });
  }

}

export function awsFactory(awsService: AwsService) {
  return (): Promise<any> => {
    return awsService.Init();
  };
}
