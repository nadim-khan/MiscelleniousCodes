import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncSecurityComponent } from './func-security.component';

describe('FuncSecurityComponent', () => {
  let component: FuncSecurityComponent;
  let fixture: ComponentFixture<FuncSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
