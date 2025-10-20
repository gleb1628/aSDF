import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  currentDifficulty: string = 'all';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {

      const childRoute = this.route.snapshot.firstChild;
      if (childRoute) {
        this.currentDifficulty = childRoute.paramMap.get('difficulty') || 'all';
      }
    });
  }

}
