import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DarkGateService } from '../../core/dark-gate.service';
import { Ritual } from '../../core/ritual.model';
import { Location } from '@angular/common'; // Импорт для кнопки "Назад"

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
    private location: Location // Инжектим Location
  ) {}

  ngOnInit(): void {
    // Берем 'id' из URL, превращаем в число
    // и по нему ищем ритуал в нашем сервисе
    this.ritual$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.darkGate.getRitualById(id);
      })
    );
  }

  // Функция для кнопки "Назад"
  goBack(): void {
    this.location.back();
  }
}