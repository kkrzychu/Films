import { Component, OnInit } from '@angular/core';
import { WebRequestService } from 'src/app/web-request.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.css']
})
export class SerialsComponent implements OnInit {

  data: Movie[];

  constructor(private WebRequest: WebRequestService) { 
  }

  ngOnInit(): void {
    this.WebRequest.get("").subscribe((response: Movie[]) => {
      this.data = response;

    });
  }

}
