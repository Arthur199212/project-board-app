import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public searchCriterion: string = '';

  handleClick() {
    this.childEvent.emit(this.searchCriterion);
  }

  onKeydown({ key }) {
    if (key === "Enter") {
      this.handleClick();
    }
  }
}
