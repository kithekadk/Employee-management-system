import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    let logo = fixture.nativeElement.querySelector('.logo')

    expect(logo.textContent).toBe('EMS')
  });

  it('test if logo value is EMS', ()=>{
    let logo = fixture.nativeElement.querySelector('.logo');

    expect(logo.textContent).toBe('EMS')
  })
});
