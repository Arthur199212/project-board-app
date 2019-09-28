import { Component, OnInit, Input } from '@angular/core';
import { SearchCriteriaPipe } from '../pipes/search-criteria.pipe';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() public cardItem;

  @Input() public query;

  @Input() public isDone: boolean;

  constructor() { }

  ngOnInit() {
  }

}
