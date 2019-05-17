import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaeComponent } from './vitae.component';

describe('VitaeComponent', () => {
  let component: VitaeComponent;
  let fixture: ComponentFixture<VitaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
