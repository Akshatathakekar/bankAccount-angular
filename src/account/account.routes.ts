import { Route, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account.component';
import { GetAccountComponent } from './getAccount.component';


export const accountRoutes:Routes=[

    {path:"account",component:CreateAccountComponent},
    {path:"account/",component:GetAccountComponent}
]