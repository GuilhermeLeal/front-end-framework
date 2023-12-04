import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
import { NgFor } from '@angular/common';
import { Router } from "@angular/router"
import { HighlightDirective } from "../highlight.directive";

interface Genre {
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, HighlightDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private genreService: GenreService, private router: Router) {}

  navigateToMoviesListWithQueryParams(genreId: number): void {

    this.router.navigate([`/moviesList/${genreId}`]);
  }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(): void {
    this.genreService.getGenres().subscribe((response: any) => {
      if (response && response.genres) {
        this.genres = response.genres;
      }
    });
  }
}
