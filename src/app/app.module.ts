import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountModule } from '../account/account.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
    AppComponent,WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
