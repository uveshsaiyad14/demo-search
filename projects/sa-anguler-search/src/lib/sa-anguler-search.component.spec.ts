import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaAngulerSearchComponent } from './sa-anguler-search.component';

describe('SaAngulerSearchComponent', () => {
  let component: SaAngulerSearchComponent;
  let fixture: ComponentFixture<SaAngulerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaAngulerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaAngulerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
