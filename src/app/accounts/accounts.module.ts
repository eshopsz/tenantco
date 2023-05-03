import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { InfoComponent } from './info/info.component';
import { SecurityComponent } from './security/security.component';
import { PropertiesComponent } from './properties/properties.component';
import { AccountNavComponent } from './account-nav/account-nav.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InfoComponent,
    SecurityComponent,
    PropertiesComponent,
    AccountNavComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule
  ]
})
export class AccountsModule { }
