import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiNotificationsModule,
} from '@taiga-ui/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TuiInputModule } from '@taiga-ui/kit';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { loadProviders } from './app.providers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TuiInputModule,
  ],
  providers: loadProviders(),
  bootstrap: [AppComponent],
})
export class AppModule {}
