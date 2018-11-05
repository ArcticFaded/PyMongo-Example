
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionCardsComponent } from './option-cards.component';

describe('OptionCardsComponent', () => {
  let component: OptionCardsComponent;
  let fixture: ComponentFixture<OptionCardsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
