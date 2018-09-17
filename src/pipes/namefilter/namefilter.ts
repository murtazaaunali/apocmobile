import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the NamefilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'nameFilter',
  pure: true
})
export class NamefilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], filter: string): any {
    if(!items || !filter) {
      return items;
    }
    // To search values only of "name" variable of your object(item)
    //return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

    // To search in values of every variable of your object(item)
    return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
