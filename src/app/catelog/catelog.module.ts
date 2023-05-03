import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatelogRoutingModule } from './catelog-routing.module';
import { RentListComponent } from './rent-list/rent-list.component';
import { EstateComponent } from './estate/estate.component';
import { AddEstateComponent } from './add-estate/add-estate.component';
import { FormsModule } from '@angular/forms';
import { EditEstateComponent } from './edit-estate/edit-estate.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    RentListComponent,
    EstateComponent,
    AddEstateComponent,
    EditEstateComponent
  ],
  imports: [
    CommonModule,
    CatelogRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class CatelogModule { }
