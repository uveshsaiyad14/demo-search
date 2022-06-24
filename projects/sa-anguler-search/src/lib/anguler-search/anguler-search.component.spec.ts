import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulerSearchComponent } from './anguler-search.component';

describe('AngulerSearchComponent', () => {
  let component: AngulerSearchComponent;
  let fixture: ComponentFixture<AngulerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngulerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
