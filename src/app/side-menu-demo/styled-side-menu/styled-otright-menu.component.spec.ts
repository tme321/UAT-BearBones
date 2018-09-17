import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledOTRightMenuComponent } from './styled-otright-menu.component';

describe('StyledOTRightMenuComponent', () => {
  let component: StyledOTRightMenuComponent;
  let fixture: ComponentFixture<StyledOTRightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledOTRightMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledOTRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
