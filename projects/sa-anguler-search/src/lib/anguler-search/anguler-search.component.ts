import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-anguler-search',
  templateUrl: './anguler-search.component.html',
  styleUrls: ['./anguler-search.component.scss']
})
export class AngulerSearchComponent implements OnInit {
  @Output() searchEmit = new EventEmitter();  
  constructor() {
    // todo
  }

  ngOnInit(): void {
    // todo
  }

  search(event: any) {
    this.searchEmit.emit(event);
  }

}
