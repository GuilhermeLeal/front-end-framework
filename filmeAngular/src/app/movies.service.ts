import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private key =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2Q1YTM2NTQ4ODNkYzY5MWE5OTEzMGE3OWJjZDk1YSIsInN1YiI6IjY1NmQyYzY3NTFmOTlhMDEzYTRlYzkxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zA_UW2Si-mNd7pP-Rrjtfslc76arnwoVNXkPX5jR-Q8';

  constructor(private http: HttpClient) {}

  getMoviesByGenre(genreId: number): Observable<any[]> {

    const tmdbApiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&with_genres=${genreId}`;
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: this.key,
    });
    return this.http.get<any[]>(tmdbApiUrl, { headers });
  }
}
