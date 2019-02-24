import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewFilmComponent} from './films/new-film/new-film.component';
import {FilmsListComponent} from './films/films-list/films-list.component';

const routes: Routes = [{
  path: 'new-film', component: NewFilmComponent
},
  {
    path: 'films', component: FilmsListComponent
  },
  {
    path: '', component: FilmsListComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
