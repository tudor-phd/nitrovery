import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchOrigin: string, searchDestination: string, searchCompany: string){
    if (items && items.length){
        return items.filter(item =>{
            if (searchOrigin && item.cityOrigin.toLowerCase().indexOf(searchOrigin.toLowerCase()) === -1){
                return false;
            }
            if (searchDestination && item.cityDestination.toLowerCase().indexOf(searchDestination.toLowerCase()) === -1){
                return false;
            }
            if (searchCompany && item.company.toLowerCase().indexOf(searchCompany.toLowerCase()) === -1){
                return false;
            }
            return true;
       })
    }
    else{
        return items;
    }
}
}

