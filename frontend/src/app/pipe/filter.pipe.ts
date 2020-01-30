import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(publis:any,arg:any): any{
    if (arg === '' || arg.length < 3 ) return publis;
    console.log('esto devuelve'+publis);

    const resultSearch = [];
    console.log(publis)
    for (const publi of publis) {
      if(publi.titulo_p > -1){
        resultSearch.push(publi);
      };
    };
    return resultSearch;
  }
    
}
