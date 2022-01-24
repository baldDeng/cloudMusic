import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WyCarpuselComponent } from './wy-carpusel.component';

describe('WyCarpuselComponent', () => {
  let component: WyCarpuselComponent;
  let fixture: ComponentFixture<WyCarpuselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyCarpuselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyCarpuselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
