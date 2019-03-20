import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  routes: RouteEntry[] = [
    {
      caption: 'Todos',
      router: ['todo'],
      exact: true
    },
    {
      caption: 'Counter',
      router: ['counter'],
      exact: true
    }
  ];
}

interface RouteEntry {
  caption: string;
  router: [string];
  exact: boolean;
}
