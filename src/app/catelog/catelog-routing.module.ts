import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryResolver } from '../resolvers/category.resolver';
import { EstatesResolver } from '../resolvers/estates.resolver';
import { ExtrasResolver } from '../resolvers/extras.resolver';
import { ProvincesResolver } from '../resolvers/provinces.resolver';
import { TypeResolver } from '../resolvers/type.resolver';
import { AddEstateComponent } from './add-estate/add-estate.component';
import { EstateComponent } from './estate/estate.component';
import { RentListComponent } from './rent-list/rent-list.component';
import { EstateResolver } from '../resolvers/estate.resolver';
import { EditEstateComponent } from './edit-estate/edit-estate.component';

const routes: Routes = [
  { path: '', component: RentListComponent, resolve: {
    estates: EstatesResolver,
    types: TypeResolver,
    provinces: ProvincesResolver,
    extras: ExtrasResolver
  } },
  { path: 'estate/:id', component: EstateComponent, resolve: {
    estate: EstateResolver,
    estates: EstatesResolver,
  } },
  { path: 'new', component: AddEstateComponent, resolve: {
    categories: CategoryResolver,
    types: TypeResolver,
    provinces: ProvincesResolver,
    extras: ExtrasResolver
  } },
  { path: 'estate/:id/edit', component: EditEstateComponent, resolve: {
    estate: EstateResolver,
    categories: CategoryResolver,
    types: TypeResolver,
    provinces: ProvincesResolver,
    extras: ExtrasResolver
  } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatelogRoutingModule { }
