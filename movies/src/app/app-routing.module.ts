import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewFilmComponent} from './films/new-film/new-film.component';
import {FilmsListComponent} from './films/films-list/films-list.component';
import {EditFilmComponent} from './films/edit-film/edit-film.component';


const routes: Routes = [{
  path: 'new-film', component: NewFilmComponent
},
  {
    path: 'films/:id', component: EditFilmComponent
  },
  {
    path: 'films', component: FilmsListComponent
  },
  {
    path: '', redirectTo: 'films', pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
