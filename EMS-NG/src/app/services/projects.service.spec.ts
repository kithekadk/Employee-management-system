import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let httpMock : HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjectsService]
    });
    service = TestBed.inject(ProjectsService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should delete a project", ()=>{
    let mockedID = 'my-mocked-id87576987'

    let mockResponse: {message: string} = {"message": "Project deleted successfully"}

    service.deleteProject(mockedID).subscribe(res=>{
      expect(res).toEqual(mockResponse)
    })

    const req = httpMock.expectOne(`http://localhost:4400/projects/${mockedID}`)
    expect(req.request.method).toEqual('DELETE');
    req.flush(mockResponse)

  })
});
