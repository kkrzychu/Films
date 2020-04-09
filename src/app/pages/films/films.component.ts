import { Component, OnInit } from '@angular/core';
import { WebRequestService } from 'src/app/web-request.service';
import { from } from 'rxjs';
import { Movie } from 'src/app/models/movie.model'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {


  data: Movie[];

  constructor(private WebRequest: WebRequestService) { 
  }

  ngOnInit(): void {
    this.WebRequest.get().subscribe((response: Movie[]) => {
      this.data = response;

    });
  }


}
