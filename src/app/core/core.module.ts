import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiActiveZoneModule, TuiLetModule } from '@taiga-ui/cdk';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { StickyDirective } from './header/sticky.directive';
import { DatalistRowDropdownComponent } from './datalist-row-dropdown/datalist-row-dropdown.component';
import { DataListRowActionProvider } from './services/dataListRowActionProvider';
import { UserListRowActionsService } from '../users/services/user-list-row-actions.service';

@NgModule({
  declarations: [
    HeaderComponent,
    StickyDirective,
    SidebarComponent,
    NavigationComponent,
    DatalistRowDropdownComponent,
  ],
  imports: [
    CommonModule,
    TuiSvgModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiDropdownModule,
    TuiActiveZoneModule,
    TuiButtonModule,
    TuiLetModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SidebarComponent,
    NavigationComponent,
    DatalistRowDropdownComponent,
    TuiSvgModule,
  ],
})
export class CoreModule {}
