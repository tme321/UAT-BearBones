import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledRightMenuComponent } from './styled-right-menu.component';

describe('StyledRightMenuComponent', () => {
  let component: StyledRightMenuComponent;
  let fixture: ComponentFixture<StyledRightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledRightMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
