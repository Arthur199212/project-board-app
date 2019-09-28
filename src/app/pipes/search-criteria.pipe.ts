import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCriteria'
})
export class SearchCriteriaPipe implements PipeTransform {

  transform(cards: any, query: string): any {
    if (!query) return cards;

    return cards.filter(card => card.name.toLowerCase().includes(query.toLocaleLowerCase()));
  }

}
