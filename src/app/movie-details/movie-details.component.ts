import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import { MoviesService} from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id:any;
  MovieDetails:any;
  topTrend:any=[];
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  isLodaing : boolean =false;

  constructor(public _ActivatedRoute:ActivatedRoute , public _MoviesService:MoviesService) { 
   this.id =  _ActivatedRoute.snapshot.paramMap.get('id');
   
    _MoviesService.getMovieDetails( this.id ).subscribe (data =>{
      this.MovieDetails = data;

      this.isLodaing = true;
    })

    _MoviesService.getTrendingMovies().subscribe(movies =>{
      for (let i=0 ;i<4; i++)
      {
          this.topTrend.push(movies.results[i]);
      }
    })

  }

  ngOnInit(): void {
  }

}
