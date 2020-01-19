import { FormControl } from "@angular/forms";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

export class MyValidator {
  static restrictedEmails(control: FormControl): { [key: string]: boolean } {
    if (
      ["v@mail.ru", "test@mail.ru"].includes(
        control.value && (<string>control.value).trim().toLowerCase()
      )
    ) {
      return {
        restrictedEmail: true
      };
    }

    return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      of(control.value)
        .pipe(delay(1500))
        .subscribe(email => {
          if (email === "async@mail.ru") {
            resolve({ uniqEmail: true });
          } else {
            resolve(null);
          }
        });
    });
  }
}
