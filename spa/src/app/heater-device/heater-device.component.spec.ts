import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaterDeviceComponent } from './heater-device.component';

describe('HeaterDeviceComponent', () => {
  let component: HeaterDeviceComponent;
  let fixture: ComponentFixture<HeaterDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaterDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaterDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
