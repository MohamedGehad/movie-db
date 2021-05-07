import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TvservesService {


  constructor(public _HttpClient:HttpClient) 
  {   


  }



  getTrendingTv():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=5e93cbc0bbf89f121c7f809b601f3d7a')
  }

  
  
 getTrendingMovies():Observable<any>
 {
   return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=5e93cbc0bbf89f121c7f809b601f3d7a')
 }





 gettvDetails(id):Observable<any>
 {
   return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5e93cbc0bbf89f121c7f809b601f3d7a&language=en-US`)
 }




}
