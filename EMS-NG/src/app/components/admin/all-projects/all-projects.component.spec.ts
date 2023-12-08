import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectsComponent } from './all-projects.component';
import { ProjectsService } from 'src/app/services/projects.service';
import { Router } from '@angular/router';

describe('AllProjectsComponent', () => {
  let component: AllProjectsComponent;
  let fixture: ComponentFixture<AllProjectsComponent>;
  let projectServiceSpy : jasmine.SpyObj<ProjectsService>
  let routerSpy: jasmine.SpyObj<Router>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProjectsComponent],
      providers: [
        {provide: ProjectsService, useValue: projectServiceSpy},
        {provide: Router, usevalue: routerSpy}
      ]
    });
    fixture = TestBed.createComponent(AllProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
