import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataListRowAction } from '../interfaces/dataListRowAction';
import { DataListRowActionProvider } from './dataListRowActionProvider';

@Injectable({
  providedIn: 'root',
})
export class DefaultDataListRowActionsService extends DataListRowActionProvider {
  actionStore: Subject<{ action: string; payload: any }> = new Subject();

  override readonly actionList: DataListRowAction[] = [
    {
      name: 'edit',
      label: 'Edit',
    },
    {
      name: 'edit',
      label: 'Edit',
    },
    {
      name: 'disable',
      label: 'Disable',
    },
  ];

  override subscribe() {}
}
