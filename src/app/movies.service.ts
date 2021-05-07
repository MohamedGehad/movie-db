import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

   constructor(public _HttpClient:HttpClient) 
   {   


   }


  getTrendingMovies():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=5e93cbc0bbf89f121c7f809b601f3d7a')
  }


  getTrendingTv():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=5e93cbc0bbf89f121c7f809b601f3d7a')
  }



  getMovieDetails(id):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5e93cbc0bbf89f121c7f809b601f3d7a&language=en-US`)
  }

}
