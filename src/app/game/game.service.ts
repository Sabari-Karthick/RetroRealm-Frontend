import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Game } from './Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private http = inject(HttpClient);

  constructor(/*private http:HttpClient*/) { }


 public getAllGames():Observable<Game[]>{
  return this.http.post<Game[]>('/api/game/all',{}).pipe(
    catchError(this.handleError)
  );
 }

  public getGame(id:string):Observable<Game>{
    return this.http.post<Game>('/api/game/',{id}).pipe(
      catchError(this.handleError)
    );
  }

 private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code
    console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  }
  return throwError(()=> error);
}

}
