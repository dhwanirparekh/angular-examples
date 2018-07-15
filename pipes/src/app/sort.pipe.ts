import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propname: string): any {
    
    if(value.length!==0){
      
      value.sort(
        (a,b) =>
        {
          return (a[propname] > b[propname]) ? 1 : ((b[propname] > a[propname]) ? -1 : 0);
        } 
      ); 
     
    }
    return value;
  }

}
