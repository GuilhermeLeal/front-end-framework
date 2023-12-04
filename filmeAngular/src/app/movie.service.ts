import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private key =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2Q1YTM2NTQ4ODNkYzY5MWE5OTEzMGE3OWJjZDk1YSIsInN1YiI6IjY1NmQyYzY3NTFmOTlhMDEzYTRlYzkxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zA_UW2Si-mNd7pP-Rrjtfslc76arnwoVNXkPX5jR-Q8';

  constructor(private http: HttpClient) {}

  getMovieById(movieId: number): Observable<any[]> {
    const tmdbApiUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`;
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: this.key,
    });
    return this.http.get<any[]>(tmdbApiUrl, { headers });
  }
}
