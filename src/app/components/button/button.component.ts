import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  standalone: true,
  template: `
    <button
      class=" text-black w-full px-5 py-2 rounded-xl shadow-md hover:bg-slate-200"
      (click)="btnClicked.emit()"
    >
      <span class="text-md">{{ label() }}</span>
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  label = input<string>();

  btnClicked = output();
}
