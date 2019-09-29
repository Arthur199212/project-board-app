import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appUrgency]'
})
export class UrgencyDirective implements OnInit {

  @Input() date: string | Date;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const diffTime = new Date(this.date).getTime() - new Date().getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 3) {
      this.el.nativeElement.style.backgroundColor = '#FFDFD5';
    } else if (diffDays < 7) {
      this.el.nativeElement.style.backgroundColor = '#FFF6CE';
    } else {
      this.el.nativeElement.style.backgroundColor = '#FFF';
    }
  }

}
