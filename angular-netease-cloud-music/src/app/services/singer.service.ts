import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Singer } from './data-types/common.types';
import { API_CONFIG } from './services.module';
import queryString from 'query-string'

type SingerParams = {
  offset:number;
  limit:number;
  cat?:string
}

const defaultParams : SingerParams = {
  offset:0,
  limit:9,
  cat:'5001'
}

@Injectable({
  providedIn: 'root'
})
export class SingerService {

  constructor(public http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  getEnterSinger(args:SingerParams = defaultParams): Observable<Singer[]> {
    const params = new HttpParams({fromString: queryString.stringify(args)})
    return this.http.get(this.uri + "/artist/list",{params}).pipe(map((res: { artists: Singer[] }) => res.artists))
  }
}
