import { NgModule } from '@angular/core';
import { SaAngulerSearchComponent } from './sa-anguler-search.component';
import { DebounceKeyupDirective } from './debounce-keyup.directive';
import { AngulerSearchComponent } from './anguler-search/anguler-search.component';



@NgModule({
  declarations: [
    SaAngulerSearchComponent,
    DebounceKeyupDirective,
    AngulerSearchComponent
  ],
  imports: [
  ],
  exports: [
    SaAngulerSearchComponent,AngulerSearchComponent
  ]
})
export class SaAngulerSearchModule { }
