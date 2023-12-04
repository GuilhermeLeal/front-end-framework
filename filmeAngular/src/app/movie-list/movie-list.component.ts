import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { NgxPaginationModule} from 'ngx-pagination';

interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgFor, NgxPaginationModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  genreId: number = 0;
  movies: Movie[] = [];
  currentPage: number = 1
  pagedMovies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  navigateToMovieWithQueryParams(movieId: number): void {
    this.router.navigate([`/movies/${movieId}`]);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let genreId: string | null = params.get('id');

      if (genreId !== null) {
        this.genreId = parseInt(genreId);

        this.getMovies(this.genreId);
      } else {
        console.log('Genre name not found');
      }
    });
  }

  getMovies(genreId: number): void {
    this.moviesService.getMoviesByGenre(genreId).subscribe((response: any) => {
      if (response && response.results) {
        this.movies = response.results;
        this.setPage(1);
      }
    });
  }

  setPage(page: number): void {
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    this.pagedMovies = this.movies.slice(startIndex, endIndex);
    this.currentPage = page;
  }

  pageChanged(event: number): void {
    this.setPage(event);
  }
}
