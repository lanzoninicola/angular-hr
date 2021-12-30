import { forwardRef, Provider } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TUI_SANITIZER } from '@taiga-ui/cdk';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

import { DataListRowActionProvider } from './core/services/dataListRowActionProvider';
import { DefaultDataListRowActionsService } from './core/services/default-data-list-row-actions.service';
import { UserListRowActionsService } from './users/services/user-list-row-actions.service';

export function loadProviders(): Array<Provider> {
  return [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    {
      provide: DataListRowActionProvider,
      useClass: forwardRef(() => {
        const pathName = window.location.pathname;

        if (pathName.includes('users')) {
          return UserListRowActionsService;
        }

        return DefaultDataListRowActionsService;
      }),
    },
  ];
}
