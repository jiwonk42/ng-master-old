import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book.model';

@Pipe({
  name: "version",
  pure: false
})


export class VersionPipe implements PipeTransform {
  transform (input: Book[], desiredVersion) {

    var output: Book[] = [];

    if (desiredVersion === "angular-js") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].version === "AngularJS") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredVersion === "angular2") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].version === "Angular 2") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredVersion === "angular4") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].version === "Angular 4") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
