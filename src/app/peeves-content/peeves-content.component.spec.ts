import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeevesContentComponent } from './peeves-content.component';

describe('PeevesContentComponent', () => {
  let component: PeevesContentComponent;
  let fixture: ComponentFixture<PeevesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeevesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeevesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
