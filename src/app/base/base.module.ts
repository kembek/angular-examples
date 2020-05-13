import { NgModule, ModuleWithProviders } from "@angular/core";
import { BaseService } from "./base.service";
import { API_URL } from "./tokens";

@NgModule({})
export class BaseModule {
  static forRoot(url: string): ModuleWithProviders<BaseModule> {
    return {
      ngModule: BaseModule,
      providers: [
        BaseService,
        {
          provide: API_URL,
          multi: true,
          useValue: url,
        },
      ],
    };
  }
}
