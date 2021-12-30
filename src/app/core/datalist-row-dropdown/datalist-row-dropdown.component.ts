import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnInit,
} from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';

import { DataListRowActionProvider } from '../services/dataListRowActionProvider';
import {
  DataListRowAction,
  DataListRowActionPayload,
} from '../interfaces/dataListRowAction';

@Component({
  selector: 'app-datalist-row-dropdown',
  templateUrl: './datalist-row-dropdown.component.html',
  styleUrls: ['./datalist-row-dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatalistRowDropdownComponent implements OnInit {
  @Input() payload: any | null = null;

  actionList: DataListRowAction[] = [];
  dropdownOpen = false;

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    private readonly actionProvider: DataListRowActionProvider
  ) {}

  ngOnInit(): void {
    this.actionList = this.actionProvider.getActions();
  }

  selectOption(item: string) {
    this.dropdownOpen = false;
    this.dialogService.open(`You selected ${item}`).subscribe();
  }

  handleAction(actionPayload: DataListRowActionPayload): void {
    this.dropdownOpen = false;
    this.actionProvider.actionsStore.next(actionPayload);
  }
}
