import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledTOPLeftComponent } from './styled-topleft.component';

describe('StyledTOPLeftComponent', () => {
  let component: StyledTOPLeftComponent;
  let fixture: ComponentFixture<StyledTOPLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledTOPLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledTOPLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
