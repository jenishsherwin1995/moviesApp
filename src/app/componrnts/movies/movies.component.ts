import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MoviesService } from "../../services/movies.service";
import { TokenService } from "../../services/token.service";

@Component({
  selector: "movies",
  templateUrl: "./movies.component.html"
})
export class MoviesComponent implements OnInit {
  public list = [];
  private token: string;

  constructor(
    private tokebService: TokenService,
    private router: Router,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.token = this.tokebService.getToken("token");
  }

  public logout() {
    this.tokebService.deleteToken("token");
    this.router.navigateByUrl("");
  }

  public async loadMovies() {
    console.log(this.token);
    this.moviesService
      .getMoviesList("maya/movies/", this.token)
      .subscribe(res => console.log(res), err => console.log(err));
    // try {
    //   const movieList = await this.moviesService.getMoviesList(
    //     "maya/movies/",
    //     this.token
    //   );
    //   console.log(movieList);
    // } catch (error) {
    //   console.log(error);
    // }
  }
}
