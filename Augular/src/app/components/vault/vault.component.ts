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
  
  // Сюда будем класть отфильтрованные рецепты
  filteredRituals$: Observable<Ritual[]>;

  // Текущий тип еды (из data роута)
  currentMealRite: string = '';
  
  constructor(
    private route: ActivatedRoute,
    private darkGate: DarkGateService
  ) {}

  ngOnInit(): void {
    // combineLatest - крутая штука. Она следит сразу за двумя Observable:
    // 1. За параметрами URL (типа /lunch/easy)
    // 2. За данными роута (где мы спрятали data: { mealRite: 'Lunch' })
    
    this.filteredRituals$ = combineLatest([
      this.route.paramMap,
      this.route.data
    ]).pipe(
      // switchMap переключает нас на новый Observable - список рецептов
      switchMap(([params, data]) => {
        const difficulty = params.get('difficulty')!;
        const mealRite = data.mealRite;
        
        this.currentMealRite = mealRite.toLowerCase(); // Сохраняем для ссылок в HTML

        // Берем ВСЕ рецепты из сервиса
        return this.darkGate.getAllRituals().pipe(
          map(allRituals => {
            // 1. Фильтруем по типу еды (Breakfast, Lunch, Dinner)
            let filtered = allRituals.filter(r => 
              r.mealType.includes(mealRite)
            );
            
            // 2. Если сложность не "all", фильтруем еще и по ней
            if (difficulty !== 'all') {
              filtered = filtered.filter(r => 
                r.difficulty.toLowerCase() === difficulty
              );
            }
            
            return filtered; // Возвращаем отфильтрованный массив
          })
        );
      })
    );
  }
}