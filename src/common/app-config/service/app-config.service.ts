import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '../environment';

@Global()
@Injectable()
export class AppConfigService {
  public static appConfig: EnvironmentVariables;
  constructor(private configService: ConfigService<EnvironmentVariables>) {
    AppConfigService.appConfig = {
      PORT: this.configService.get('PORT', 3000, { infer: true })
    };
  }
}
