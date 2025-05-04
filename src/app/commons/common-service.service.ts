import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private http = inject(HttpClient);

  constructor() { }

  private static readonly DEFAULT_START = 0;
  private static readonly DEFAULT_SIZE = 25;

  getPaginationRequest(start: number, size: number, asc: boolean, property: string, filters: Map<string, Object>) {
    return {
      start: start,
      size: size,
      asc: asc,
      property: property,
      filters: filters
    };
  }
  getPaginationRequestWithDefaultValues() {
    return this.getPaginationRequest(
      CommonServiceService.DEFAULT_START,
      CommonServiceService.DEFAULT_SIZE,
      true,
      'createdDate',
      new Map<string, Object>()
    )
  }
  




}
