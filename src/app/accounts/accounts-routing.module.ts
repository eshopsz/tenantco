import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { SecurityComponent } from './security/security.component';
import { PropertiesComponent } from './properties/properties.component';
import { AccountResolver } from '../resolvers/account.resolver';
import { AccountEstatesResolver } from '../resolvers/account-estates.resolver';
import { AccountPaidEstatesResolver } from '../resolvers/account-paid-estates.resolver';

const routes: Routes = [
  { path: 'info', component: InfoComponent, resolve: {account: AccountResolver} },
  { path: 'security', component: SecurityComponent },
  { path: 'properties', component: PropertiesComponent, resolve: {
    account: AccountResolver,
    estates: AccountEstatesResolver,
    paid_estates: AccountPaidEstatesResolver
  } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
