import { environment } from '@env/environment';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { SharedModule } from '@shared/shared.module';

describe('Service: Api', () => {
  let httpTestingController: HttpTestingController;
  let apiService: ApiService;
  const objectRequest = {
    id: 1,
    name: 'crypto'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule,
      ],
      providers: [ApiService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    apiService = TestBed.inject(ApiService);
  });

  it('should call get', () => {
    apiService.get('/bitcoin').subscribe();
    const req = httpTestingController.expectOne(environment.api + '/bitcoin');
    expect(req.request.method).toEqual('GET');
    expect(req.request.url).toEqual(environment.api + '/bitcoin');
  });

  it('should call put', () => {
    apiService.put('/bitcoin', objectRequest).subscribe();
    const req = httpTestingController.expectOne(environment.api + '/bitcoin');
    expect(req.request.method).toEqual('PUT');
    expect(req.request.url).toEqual(environment.api + '/bitcoin');
    expect(req.request.body).toEqual('{"id":1,"name":"crypto"}');
  });

  it('should call patch', () => {
    apiService.patch('/bitcoin', objectRequest).subscribe();
    const req = httpTestingController.expectOne(environment.api + '/bitcoin');
    expect(req.request.method).toEqual('PATCH');
    expect(req.request.url).toEqual(environment.api + '/bitcoin');
    expect(req.request.body).toEqual('{"id":1,"name":"crypto"}');
  });

  it('should call post', () => {
    apiService.post('/bitcoin', objectRequest).subscribe();
    const req = httpTestingController.expectOne(environment.api + '/bitcoin');
    expect(req.request.method).toEqual('POST');
    expect(req.request.url).toEqual(environment.api + '/bitcoin');
    expect(req.request.body).toEqual('{"id":1,"name":"crypto"}');
  });

  it('should call delete', () => {
    apiService.delete('/bitcoin').subscribe();
    const req = httpTestingController.expectOne(environment.api + '/bitcoin');
    expect(req.request.method).toEqual('DELETE');
    expect(req.request.url).toEqual(environment.api + '/bitcoin');
  });
});
