/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@core/layout/home/home.component';
import { NotFoundComponent } from '@core/layout/not-found/not-found.component';
import { DetailModule } from './pages/detail/detail.module';
import { ListModule } from './pages/list/list.module';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: (): Promise<typeof ListModule> => import('./pages/list/list.module').then(m => m.ListModule),
  },
  {
    path: 'list/:id',
    loadChildren: (): Promise<typeof DetailModule> => import('./pages/detail/detail.module').then(m => m.DetailModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
