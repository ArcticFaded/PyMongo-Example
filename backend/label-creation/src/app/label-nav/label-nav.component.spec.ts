
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LabelNavComponent } from './label-nav.component';

describe('LabelNavComponent', () => {
  let component: LabelNavComponent;
  let fixture: ComponentFixture<LabelNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [LabelNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
