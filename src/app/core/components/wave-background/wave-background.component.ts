import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wave-background',
  templateUrl: './wave-background.component.html',
  styleUrls: ['./wave-background.component.css'],
  standalone: true,
  imports: [NgIf],
})
export class WaveBackgroundComponent implements OnInit {
  @Input() enabled = false;
  constructor() {}

  ngOnInit() {}
}
