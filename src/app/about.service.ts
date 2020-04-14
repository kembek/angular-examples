import { Injectable } from "@angular/core";
import { ConfigurationService } from "./configuration.service";
import { switchMap } from "rxjs/operators";
import { of, Observable } from "rxjs";

interface IAbout {
  title: string;
  body: string;
}

@Injectable({ providedIn: "root" })
export class AboutService {
  constructor(private config: ConfigurationService) {}

  getData(): Observable<IAbout> {
    return this.config.loadConfig().pipe(
      switchMap((data) => {
        console.log("--- *** ---");
        console.log("Fetch data by that URL: ", data.apiUrl);
        console.log("--- *** ---");

        return of<IAbout>({
          title: "Lorem ipsum",
          body:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, doloribus velit consequatur optio error, consequuntur aperiam unde voluptate consectetur nulla nam dolor accusantium veritatis molestias iure ipsum? Eum, culpa quaerat.",
        });
      })
    );
  }
}
