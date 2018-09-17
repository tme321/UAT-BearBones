import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledTOPRightComponent } from './styled-topright.component';

describe('StyledTOPRightComponent', () => {
  let component: StyledTOPRightComponent;
  let fixture: ComponentFixture<StyledTOPRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledTOPRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledTOPRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
