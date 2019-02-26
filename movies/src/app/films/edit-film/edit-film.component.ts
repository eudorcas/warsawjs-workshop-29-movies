import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FilmsService} from '../../core/services/films.service';
import {Film} from '../film';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {
  filmEditForm: FormGroup;
  film: Film;
  id: number;
  errorMessage: string;


  constructor(private filmsService: FilmsService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.filmEditForm = this.fb.group({
      title: [''],
      genre: [''],
      numberInStock: [''],
      dailyRentalRate: [''],
      imageUrl: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.id = params.id;
        this.getFilmById();
      }
    );
  }

  onSubmit() {
    if (this.filmEditForm.invalid) {
      return;
    }
    this.filmsService.editFilm(this.id, this.filmEditForm.value as Film).subscribe();
    this.router.navigate(['/films']);
  }

  getFilmById() {
    this.filmsService.getFilmById(this.id).subscribe(
      data => {
        this.film = data as Film;
        this.initForm();
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

  private initForm() {
    const title = this.film.title;
    const genre = this.film.genre;
    const numberInStock = this.film.numberInStock;
    const dailyRentalRate = this.film.dailyRentalRate;
    const imageUrl = this.film.imageUrl;
    this.filmEditForm = new FormGroup({
      title: new FormControl(title, Validators.required),
      genre: new FormControl(genre, Validators.required),
      numberInStock: new FormControl(numberInStock, Validators.required),
      dailyRentalRate: new FormControl(dailyRentalRate, Validators.required),
      imageUrl: new FormControl(imageUrl, Validators.required),
    });
  }

}
