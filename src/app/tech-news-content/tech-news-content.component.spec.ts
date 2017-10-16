import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNewsContentComponent } from './tech-news-content.component';

describe('TechNewsContentComponent', () => {
  let component: TechNewsContentComponent;
  let fixture: ComponentFixture<TechNewsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechNewsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechNewsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
