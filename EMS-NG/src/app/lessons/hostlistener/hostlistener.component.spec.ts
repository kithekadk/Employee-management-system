import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistenerComponent } from './hostlistener.component';

describe('HostlistenerComponent', () => {
  let component: HostlistenerComponent;
  let fixture: ComponentFixture<HostlistenerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostlistenerComponent]
    });
    fixture = TestBed.createComponent(HostlistenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
