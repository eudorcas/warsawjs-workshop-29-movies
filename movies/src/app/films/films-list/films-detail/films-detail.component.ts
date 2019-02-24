import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.scss']
})
export class FilmsDetailComponent implements OnInit {
  @Input() film;

  constructor() { }

  ngOnInit() {
  }

}
