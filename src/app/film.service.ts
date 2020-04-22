import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private webReq: WebRequestService) { }

  getFilm(filmId: string) {
    return this.webReq.get(`filmy/${filmId}`);
  }

  getTitleFilm(filmId: string) {
    return this.webReq.get(`filmy/search/${filmId}`);
  }
}
