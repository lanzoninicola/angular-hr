import { forwardRef, Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { DataListRowAction } from '../interfaces/dataListRowAction';
import { DefaultDataListRowActionsService } from './default-data-list-row-actions.service';

/**
 * This class is used to abstract the service
 * responsible to expose the functionality of each row of a Data List.
 *
 * Example:
 * I have a list of users, for each row of list I can implements
 * specific action (edit, remove etc...)
 */
@Injectable({
  providedIn: 'root',
})
export abstract class DataListRowActionProvider implements OnDestroy {
  actionsStore: Subject<any> = new Subject();
  readonly actionList: DataListRowAction[] = [];

  getActions(): DataListRowAction[] {
    return this.actionList;
  }

  constructor() {
    this.subscribe();
  }

  abstract subscribe(): void;

  ngOnDestroy() {
    this.actionsStore.unsubscribe();
  }
}
