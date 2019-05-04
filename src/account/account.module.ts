import { NgModule } from '@angular/core';
import { CreateAccountComponent } from './create-account.component';
import { BrowserModule } from '@angular/platform-browser';
import { accountRoutes } from './account.routes';
import { RouterModule } from '@angular/router';
import { AccountService } from './account.service';
import { HttpClientModule } from '@angular/common/http';
import { GetAccountComponent } from './getAccount.component';

@NgModule({
    declarations:[
        CreateAccountComponent,GetAccountComponent
    ],
    imports:[
        BrowserModule,
        RouterModule.forChild(accountRoutes),
         HttpClientModule
    ],
    exports:[
        CreateAccountComponent,
        GetAccountComponent,
        RouterModule
    ],
    providers:[
        AccountService
    ]
})
export class AccountModule{

}