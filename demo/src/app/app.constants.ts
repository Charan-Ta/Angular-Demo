import {NgModule, InjectionToken} from '@angular/core';
export let SERVICE_CONSTANTS= new InjectionToken<ServiceConstantsConfig>('services_constant');
export class ServiceConstantsConfig{
  apiRootUrl: string;
  API : Object;
}
export const SERVICE_CONSTANTS_CONFIG: ServiceConstantsConfig={
    apiRootUrl:'api/',
    API : {
     "SecondNav":"GetSecondNavElements.json"
    }
}
@NgModule({
    providers :[{
      provide: SERVICE_CONSTANTS,
      useValue: SERVICE_CONSTANTS_CONFIG
    }]
})
export class AppConstantsModule {}