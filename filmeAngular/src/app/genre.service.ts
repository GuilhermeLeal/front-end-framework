import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private key =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2Q1YTM2NTQ4ODNkYzY5MWE5OTEzMGE3OWJjZDk1YSIsInN1YiI6IjY1NmQyYzY3NTFmOTlhMDEzYTRlYzkxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zA_UW2Si-mNd7pP-Rrjtfslc76arnwoVNXkPX5jR-Q8';
  private tmdbApiUrl =
    'https://api.themoviedb.org/3/genre/movie/list?language=pt';

  constructor(private http: HttpClient) {}

  getGenres(): Observable<any[]> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: this.key,
    });
    return this.http.get<any[]>(this.tmdbApiUrl, { headers });
  }
}
