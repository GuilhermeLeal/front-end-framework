import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'moviesList/:id', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirecionamento padrão
  { path: '**', component: HomeComponent }, // Rota padrão caso a rota não seja encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
