import { TestBed } from '@angular/core/testing';

import { UserListRowActionsService } from './user-list-row-actions.service';

describe('UserListRowActionsService', () => {
  let service: UserListRowActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListRowActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
