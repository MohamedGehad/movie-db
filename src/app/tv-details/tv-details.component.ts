import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import{TvservesService} from '../tvserves.service'

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {

  id:any;
  tvDetails:any;
  topTrend:any=[];
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  isLodaing : boolean =false;

  constructor(public _ActivatedRoute:ActivatedRoute , public _TvservesService:TvservesService) { 
   this.id =  _ActivatedRoute.snapshot.paramMap.get('id');
   
   _TvservesService.gettvDetails( this.id ).subscribe (data =>{
      this.tvDetails = data;

      this.isLodaing = true;
    })

    

   }

  ngOnInit(): void {
  };

}
