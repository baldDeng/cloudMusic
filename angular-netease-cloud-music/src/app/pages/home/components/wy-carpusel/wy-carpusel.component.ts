import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wy-carpusel',
  templateUrl: './wy-carpusel.component.html',
  styleUrls: ['./wy-carpusel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WyCarpuselComponent implements OnInit {
  @Input() activeIndex:number = 0;
  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();
  @ViewChild('dot',{static:true}) dotRef:TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

  onChangeSlide(type:'pre' | 'next'){
    this.changeSlide.emit(type)
  }
}
