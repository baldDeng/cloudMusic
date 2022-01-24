import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wy-player',
  templateUrl: './wy-player.component.html',
  styleUrls: ['./wy-player.component.less']
})
export class WyPlayerComponent implements OnInit {
  sliderValue = 0;
  bufferOffset = 0;

  constructor() { }

  ngOnInit() {
  }

}
