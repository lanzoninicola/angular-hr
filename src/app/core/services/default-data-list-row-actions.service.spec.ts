import { TestBed } from '@angular/core/testing';

import { DefaultDataListRowActionsService } from './default-data-list-row-actions.service';

describe('DefaultDataListRowActionsService', () => {
  let service: DefaultDataListRowActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultDataListRowActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
