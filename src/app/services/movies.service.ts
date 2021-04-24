import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  private baseURL = "https://demo.onefin.in/api/v1/";
  constructor(private httpClient: HttpClient) {}
  getMoviesList(endpoint: string, token: string) {
    const url = this.baseURL + endpoint;
    const headers = new HttpHeaders();
    headers.set("Authorization", "Token " + token);
    return this.httpClient.get(url, { headers });
  }
}
