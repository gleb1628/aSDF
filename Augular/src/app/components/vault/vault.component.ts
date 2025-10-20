import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DarkGateService } from '../../core/dark-gate.service';
import { Ritual } from '../../core/ritual.model';

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})
export class VaultComponent implements OnInit {
  
  filteredRituals$: Observable<Ritual[]>;

  currentMealRite: string = '';
  
  constructor(
    private route: ActivatedRoute,
    private darkGate: DarkGateService
  ) {}

  ngOnInit(): void {

    
    this.filteredRituals$ = combineLatest([
      this.route.paramMap,
      this.route.data
    ]).pipe(

      switchMap(([params, data]) => {
        const difficulty = params.get('difficulty')!;
        const mealRite = data.mealRite;
        
        this.currentMealRite = mealRite.toLowerCase(); 


        return this.darkGate.getAllRituals().pipe(
          map(allRituals => {
      
            let filtered = allRituals.filter(r => 
              r.mealType.includes(mealRite)
            );
            
        
            if (difficulty !== 'all') {
              filtered = filtered.filter(r => 
                r.difficulty.toLowerCase() === difficulty
              );
            }
            
            return filtered; 
          })
        );
      })
    );
  }

}
