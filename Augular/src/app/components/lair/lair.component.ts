import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DarkGateService } from '../../core/dark-gate.service';
import { Ritual } from '../../core/ritual.model';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-lair',
  templateUrl: './lair.component.html',
  styleUrls: ['./lair.component.css']
})
export class LairComponent implements OnInit {

  ritual$: Observable<Ritual | undefined>;

  constructor(
    private route: ActivatedRoute,
    private darkGate: DarkGateService,
    private location: Location 
  ) {}

  ngOnInit(): void {

    this.ritual$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.darkGate.getRitualById(id);
      })
    );
  }


  goBack(): void {
    this.location.back();
  }

}
