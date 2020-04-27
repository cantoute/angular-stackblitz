import { Injectable } from '@angular/core';
import { Innertag } from './innertag';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InnertagService {


  private wsUrl = 'https://pressit.web.cantoute.com/api/tags';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:HttpClient) { }

  display(): Observable<Innertag[]> {
    return this.http.get<Innertag[]>(this.wsUrl)
	    .pipe(
            tap(_ => this.log('fetched infos ...')),
            catchError(this.handleError<Innertag[]>('display',[]))
          );
  }

  private handleError<T>(operation = 'operation', result?:T){
    return (error: any): Observable<T> => {
	      console.error('handleError'+error);
        return of(result as T);
    };
  }

  private log(message: string){
	  console.log(message);
  }

}