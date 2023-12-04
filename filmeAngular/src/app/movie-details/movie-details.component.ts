import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { HighlightDirective } from "../highlight.directive";

interface Movie {
  adult?: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [NgIf, CommonModule, HighlightDirective],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  movieId: number = 0;
  movieDetails: Movie = {};

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let movieId: string | null = params.get('id');

      if (movieId !== null) {
        this.movieId = parseInt(movieId);

        this.getMovieDetails(this.movieId);
      } else {
        console.log('movie name not found');
      }
    });
  }

  getMovieDetails(movieId: number): void {
    this.movieService.getMovieById(movieId).subscribe((response: any) => {

      if (response ) {
        this.movieDetails = response;
      }
    });
  }
}
