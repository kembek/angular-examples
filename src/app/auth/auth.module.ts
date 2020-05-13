import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "./auth.service";
import { BaseModule } from "../base/base.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, BaseModule.forRoot("http://158.69.52.119:10821/")],
  providers: [AuthService],
})
export class AuthModule {}
