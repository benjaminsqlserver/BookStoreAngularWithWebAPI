import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ConfigService } from './config.service';
import * as models from './models.model';

@Injectable()
export class ModelsService {
  basePath: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.basePath = config.get('models');
  }

  getApiBooks() : Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');

    return this.http.request('get', Location.joinWithSlash(`${this.basePath}`, `/api/Books`), {
      observe: 'response',
      headers    })
    .pipe(map(response => {
      switch (response.status) {
        case 200: {
          return response.body;
        }
      }
    }));
  }

  postApiBooks(body: models.Book | null) : Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.request('post', Location.joinWithSlash(`${this.basePath}`, `/api/Books`), {
      observe: 'response',
      headers,
      body: JSON.stringify(body)
    })
    .pipe(map(response => {
      switch (response.status) {
        case 200: {
          return response.body;
        }
      }
    }));
  }

  getApiBooksId(id: number) : Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');

    return this.http.request('get', Location.joinWithSlash(`${this.basePath}`, `/api/Books/${id}`), {
      observe: 'response',
      headers    })
    .pipe(map(response => {
      switch (response.status) {
        case 200: {
          return response.body;
        }
      }
    }));
  }

  putApiBooksId(id: number, body: models.Book | null) : Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.request('put', Location.joinWithSlash(`${this.basePath}`, `/api/Books/${id}`), {
      observe: 'response',
      headers,
      body: JSON.stringify(body)
    })
    .pipe(map(response => {
      switch (response.status) {
        case 200: {
          return body;
        }
      }
    }));
  }

  deleteApiBooksId(id: number) : Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');

    return this.http.request('delete', Location.joinWithSlash(`${this.basePath}`, `/api/Books/${id}`), {
      observe: 'response',
      headers    })
    .pipe(map(response => {
      switch (response.status) {
        case 200: {
          return {};
        }
      }
    }));
  }

  getApiCategories() : Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');

    return this.http.request('get', Location.joinWithSlash(`${this.basePath}`, `/api/Categories`), {
      observe: 'response',
      headers    })
    .pipe(map(response => {
      switch (response.status) {
        case 200: {
          return response.body;
        }
      }
    }));
  }

  postApiCategories(body: models.Category | null) : Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.request('post', Location.joinWithSlash(`${this.basePath}`, `/api/Categories`), {
      observe: 'response',
      headers,
      body: JSON.stringify(body)
    })
    .pipe(map(response => {
      switch (response.status) {
        case 200: {
          return response.body;
        }
      }
    }));
  }

  getApiCategoriesId(id: number) : Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');

    return this.http.request('get', Location.joinWithSlash(`${this.basePath}`, `/api/Categories/${id}`), {
      observe: 'response',
      headers    })
    .pipe(map(response => {
      switch (response.status) {
        case 200: {
          return response.body;
        }
      }
    }));
  }

  putApiCategoriesId(id: number, body: models.Category | null) : Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.request('put', Location.joinWithSlash(`${this.basePath}`, `/api/Categories/${id}`), {
      observe: 'response',
      headers,
      body: JSON.stringify(body)
    })
    .pipe(map(response => {
      switch (response.status) {
        case 200: {
          return body;
        }
      }
    }));
  }

  deleteApiCategoriesId(id: number) : Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');

    return this.http.request('delete', Location.joinWithSlash(`${this.basePath}`, `/api/Categories/${id}`), {
      observe: 'response',
      headers    })
    .pipe(map(response => {
      switch (response.status) {
        case 200: {
          return {};
        }
      }
    }));
  }
}
