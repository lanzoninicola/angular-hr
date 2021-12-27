import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sticky]',
})
export class StickyDirective implements OnInit {
  @Input('sticky') stickyOptions: object | null = {};

  constructor() {}

  ngOnInit(): void {}
}
