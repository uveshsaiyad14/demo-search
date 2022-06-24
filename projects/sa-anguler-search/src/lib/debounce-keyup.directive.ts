import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[libDebounceKeyup]'
})
export class DebounceKeyupDirective {
  subscription!: Subscription;
  @Output() debounceClick = new EventEmitter();
  private strokes = new Subject();
  constructor() {
    // todo
  }

  ngOnInit() {
    this.subscription! = this.strokes
      .pipe(debounceTime(500))
      .subscribe(e => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    if (this.subscription!) {
      this.subscription!.unsubscribe();
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyupEvent(event: any) {
    if (event.target.attributes.libdebouncekeyup) {
      event.preventDefault();
      event.stopPropagation();
      this.strokes.next(event);
    }
  }
}
