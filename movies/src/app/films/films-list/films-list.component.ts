import {Component, OnInit} from '@angular/core';
import { Film } from '../film';
import {FilmsService} from '../../core/services/films.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit{
  public films: Film[] = [];
  public filmsDetailIsVisible = false;
  public errorMessage: string;
  public showId: number = null;

  constructor(private filmsService: FilmsService) {

  }

  ngOnInit() {
    this.filmsService.getFilms().subscribe(
      films => {
        this.films = films.reverse();
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

  toggleFilmDetails(id): void {
    this.filmsDetailIsVisible = !this.filmsDetailIsVisible;
    this.showId = id;
  }
  public deleteMovie(id: number): void {
    this.filmsService.deleteFilm(id).subscribe(() => {
        this.filmsService.getFilms().subscribe(
          films => {
            this.films = films;
          },
          error => {
            this.errorMessage = error;
          }
        );
      }
    );
  }


}
