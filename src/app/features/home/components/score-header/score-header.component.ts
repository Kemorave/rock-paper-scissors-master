import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-header',
  templateUrl: './score-header.component.html',
  styleUrls: ['./score-header.component.css'],
  standalone: true,
})
export class ScoreHeaderComponent implements OnInit {
  constructor() {}
  @Input() score?: number;
  ngOnInit() {}
}
