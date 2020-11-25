import { Injectable } from '@angular/core';

interface ILink {
  name: string;
  url: string;
  isActive: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public links: ILink[] = [
    {
      name: 'Browse',
      url: '#',
      isActive: false
    },
    {
      name: 'A-Z Index',
      url: '#',
      isActive: false
    },
    {
      name: 'About',
      url: '#',
      isActive: false
    },
    {
      name: 'FAQs',
      url: '#',
      isActive: false
    },
    {
      name: 'User Guide',
      url: '#',
      isActive: false
    }
  ];
  constructor() {}
}
