import { Injectable } from '@angular/core';
import { Observable, of, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, any>();

  get<T>(key: string, fetcher: () => Observable<T>): Observable<T> {
    if (this.cache.has(key)) {
      return of(this.cache.get(key));
    }

    return fetcher().pipe(
      tap(data => this.cache.set(key, data)),
      shareReplay(1)
    );
  }

  clear(key?: string) {
    if (key) {
      this.cache.delete(key);
    } else {
      this.cache.clear();
    }
  }
}
