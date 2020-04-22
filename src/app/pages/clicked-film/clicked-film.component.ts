import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FilmService } from 'src/app/film.service';
import { Movie } from 'src/app/models/movie.model';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-clicked-film',
  templateUrl: './clicked-film.component.html',
  styleUrls: ['./clicked-film.component.css']
})
export class ClickedFilmComponent implements OnInit {

  data: Film;
  
  selectedListId: string;

  constructor(private filmService: FilmService, private route: ActivatedRoute, private router: Router) {
    
    
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        if(params.filmId) {
          this.selectedListId = params.filmId;
          this.filmService.getFilm(params.filmId).subscribe((film: Film) => {
            this.data = film;
          })
        } else {
          this.data = undefined;
        }
      }
    )

  }


}
