import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatelogModule } from './catelog/catelog.module';
import { EstatesResolver } from './resolvers/estates.resolver';
import { CategoryResolver } from './resolvers/category.resolver';
import { ProvincesResolver } from './resolvers/provinces.resolver';
import { TypeResolver } from './resolvers/type.resolver';
import { AccountsModule } from './accounts/accounts.module';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, resolve: {
    estates: EstatesResolver,
    types: TypeResolver,
    categories: CategoryResolver,
    provinces: ProvincesResolver
  } },
  { path: 'about', component: AboutComponent },
  {
    path: 'catalog',
    loadChildren: () => import('./catelog/catelog.module').then(m => m.CatelogModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
