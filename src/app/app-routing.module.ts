import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';
import { SerialsComponent } from './pages/serials/serials.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClickedFilmComponent } from './pages/clicked-film/clicked-film.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'filmy/search', component: FilmsComponent },
  { path: 'seriale', component: SerialsComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'filmy/:filmId', component: ClickedFilmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
