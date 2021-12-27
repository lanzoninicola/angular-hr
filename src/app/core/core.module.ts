import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { StickyDirective } from './header/sticky.directive';
import { TuiSvgModule } from '@taiga-ui/core';

@NgModule({
  declarations: [
    HeaderComponent,
    StickyDirective,
    SidebarComponent,
    NavigationComponent,
  ],
  imports: [CommonModule, TuiSvgModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SidebarComponent,
    NavigationComponent,
  ],
})
export class CoreModule {}
