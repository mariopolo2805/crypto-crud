import { environment } from '@env/environment';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { SharedModule } from '@shared/shared.module';
import { HttpErrorResponse } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        BrowserAnimationsModule,
        SharedModule,
      ],
      providers: [ApiService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    apiService = TestBed.inject(ApiService);
  });

  it('should call formatErrors', () => {
    apiService.handleError({ status: 500, statusText: 'Internal Server Error'} as HttpErrorResponse);
  });

  it('should call get', () => {
    apiService.get('/bitcoin').subscribe();
    const req = httpTestingController.expectOne(environment.api + '/bitcoin');
    expect(req.request.method).toEqual('GET');
    expect(req.request.url).toEqual(environment.api + '/bitcoin');
  });

  it('should call get with other apiPath', () => {
    apiService.get('/bitcoin', undefined, '/other-api').subscribe();
    const req = httpTestingController.expectOne('/other-api/bitcoin');
    expect(req.request.method).toEqual('GET');
    expect(req.request.url).toEqual('/other-api/bitcoin');
  });

  it('should call put', () => {
    apiService.put('/bitcoin', objectRequest).subscribe();
    const req = httpTestingController.expectOne(environment.api + '/bitcoin');
    expect(req.request.method).toEqual('PUT');
    expect(req.request.url).toEqual(environment.api + '/bitcoin');
    expect(req.request.body).toEqual('{"id":1,"name":"crypto"}');
  });

  it('should call put with other apiPath', () => {
    apiService.put('/bitcoin', objectRequest, '/other-api').subscribe();
    const req = httpTestingController.expectOne('/other-api/bitcoin');
    expect(req.request.method).toEqual('PUT');
    expect(req.request.url).toEqual('/other-api/bitcoin');
    expect(req.request.body).toEqual('{"id":1,"name":"crypto"}');
  });

  it('should call patch', () => {
    apiService.patch('/bitcoin', objectRequest).subscribe();
    const req = httpTestingController.expectOne(environment.api + '/bitcoin');
    expect(req.request.method).toEqual('PATCH');
    expect(req.request.url).toEqual(environment.api + '/bitcoin');
    expect(req.request.body).toEqual('{"id":1,"name":"crypto"}');
  });

  it('should call patch with other apiPath', () => {
    apiService.patch('/bitcoin', objectRequest, '/other-api').subscribe();
    const req = httpTestingController.expectOne('/other-api/bitcoin');
    expect(req.request.method).toEqual('PATCH');
    expect(req.request.url).toEqual('/other-api/bitcoin');
    expect(req.request.body).toEqual('{"id":1,"name":"crypto"}');
  });

  it('should call post', () => {
    apiService.post('/bitcoin', objectRequest).subscribe();
    const req = httpTestingController.expectOne(environment.api + '/bitcoin');
    expect(req.request.method).toEqual('POST');
    expect(req.request.url).toEqual(environment.api + '/bitcoin');
    expect(req.request.body).toEqual('{"id":1,"name":"crypto"}');
  });

  it('should call post with other apiPath', () => {
    apiService.post('/bitcoin', objectRequest, '/other-api').subscribe();
    const req = httpTestingController.expectOne('/other-api/bitcoin');
    expect(req.request.method).toEqual('POST');
    expect(req.request.url).toEqual('/other-api/bitcoin');
    expect(req.request.body).toEqual('{"id":1,"name":"crypto"}');
  });

  it('should call delete', () => {
    apiService.delete('/bitcoin').subscribe();
    const req = httpTestingController.expectOne(environment.api + '/bitcoin');
    expect(req.request.method).toEqual('DELETE');
    expect(req.request.url).toEqual(environment.api + '/bitcoin');
  });

  it('should call delete with other apiPath', () => {
    apiService.delete('/bitcoin', undefined, '/other-api').subscribe();
    const req = httpTestingController.expectOne('/other-api/bitcoin');
    expect(req.request.method).toEqual('DELETE');
    expect(req.request.url).toEqual('/other-api/bitcoin');
  });
});
