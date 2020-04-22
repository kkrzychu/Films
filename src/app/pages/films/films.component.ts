import { Component, OnInit } from '@angular/core';
import { WebRequestService } from 'src/app/web-request.service';
import { from } from 'rxjs';
import { Movie } from 'src/app/models/movie.model'
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {


  data: Movie[];

  constructor(private WebRequest: WebRequestService, private FilmRequest: FilmService) { 
  }

  ngOnInit(): void {
    this.WebRequest.get("").subscribe((response: Movie[]) => {
      this.data = response;
      console.log(response);
      console.log(this.data);
    });
  }

  findMovie(movie: string) {
    this.FilmRequest.getTitleFilm(movie).subscribe((response: Movie[]) => {
      this.data = response;
      console.log(response);
    })
  }


}
