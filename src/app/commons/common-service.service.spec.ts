import { TestBed } from '@angular/core/testing';
import { CommonServiceService } from './common-service.service';


describe('CommonsServiceService', () => {
  let service: CommonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
