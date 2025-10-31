import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatSelectModule, MatFormFieldModule],
  template: `
    <div class="mt-4">
      <mat-form-field color="accent" class="w-40">
        <mat-label>{{ 'LANGUAGE' | translate }}</mat-label>
        <mat-select [(value)]="selectedLang" (selectionChange)="switchLang($event.value)">
          <mat-option *ngFor="let lang of languages" [value]="lang.code">
            <span class="flex items-center gap-2">
              <span class="text-lg">{{ lang.flag }}</span>
              <span>{{ lang.label }}</span>
            </span>
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
  styles: [`
    mat-form-field {
      text-align: left;
    }
  `]
})
export class DemoComponent {
  languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'hu', label: 'Magyar', flag: '🇭🇺' }
  ];

  selectedLang = 'en';

  constructor(private translate: TranslateService) {
    translate.addLangs(this.languages.map(l => l.code));
    translate.setDefaultLang(this.selectedLang);

    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang');
      if (savedLang && this.languages.some(l => l.code === savedLang)) {
        this.selectedLang = savedLang;
        translate.use(savedLang);
      } else {
        translate.use(this.selectedLang);
      }
    } else {
      translate.use(this.selectedLang);
    }
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.selectedLang = lang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  }
}
