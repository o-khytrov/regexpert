import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: any, args: string): unknown {
    try{
      if (!args) {return value;}
      var re = new RegExp(args, 'g'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
      return value.replace(re, "<mark>$&</mark>");
    }
    catch
    {
      return value;
    }
    
  }

}
