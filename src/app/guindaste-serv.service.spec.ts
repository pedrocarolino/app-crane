import { TestBed } from '@angular/core/testing';

import { GuindasteServService } from './guindaste-serv.service';

describe('GuindasteServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuindasteServService = TestBed.get(GuindasteServService);
    expect(service).toBeTruthy();
  });
});
