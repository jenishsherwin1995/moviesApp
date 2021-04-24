import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private baseURL = "https://demo.onefin.in/api/v1/";

  constructor(private httpClient: HttpClient) {}
  postAsync(endpoint: string, userInput: any): Promise<any> {
    const headers = new HttpHeaders();
    headers.set("content-type", "application/json");
    const url = this.baseURL + endpoint;
    return this.httpClient.post(url, userInput, { headers }).toPromise();
  }
}
