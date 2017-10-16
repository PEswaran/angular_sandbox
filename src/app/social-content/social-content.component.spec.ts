import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialContentComponent } from './social-content.component';

describe('SocialContentComponent', () => {
  let component: SocialContentComponent;
  let fixture: ComponentFixture<SocialContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
