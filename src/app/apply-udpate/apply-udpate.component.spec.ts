import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyUdpateComponent } from './apply-udpate.component';

describe('ApplyUdpateComponent', () => {
  let component: ApplyUdpateComponent;
  let fixture: ComponentFixture<ApplyUdpateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyUdpateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyUdpateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
