import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Film} from '../../films/film';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private moviesUrl = 'http://localhost:3000/movies';

  constructor(private httpClient: HttpClient) {
  }

  getFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.moviesUrl);
  }

  addFilm(film: Film) {
    return this.httpClient.post(this.moviesUrl, film);
  }

  deleteFilm(id: number) {
    return this.httpClient.delete(this.moviesUrl + '/' + id);
  }

  getFilmById(id: number) {
    return this.httpClient.get(this.moviesUrl + '/' + id);
  }

  updateFilm(id: number, film: Film) {
    return this.httpClient.put(this.moviesUrl + '/' + id, film);
  }

}
