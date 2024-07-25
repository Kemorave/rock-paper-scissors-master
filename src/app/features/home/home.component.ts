import { Component, OnInit } from '@angular/core';
import { RulesComponent } from './components/rules/rules.component';
import { PlayGroundComponent } from './components/play-ground/play-ground.component';
import { ScoreHeaderComponent } from './components/score-header/score-header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RulesComponent, PlayGroundComponent, ScoreHeaderComponent],
})
export class HomeComponent implements OnInit {
  showRulesModal = false;
  constructor() {}

  ngOnInit() {}
}
