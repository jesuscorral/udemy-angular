import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practising-directives',
  templateUrl: './practising-directives.component.html',
  styleUrls: ['./practising-directives.component.css']
})
export class PractisingDirectivesComponent implements OnInit {

  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails()
  {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

  getColor(logItem)
  {
    return logItem >= 5 ? 'blue' : 'transparent';
  }
}
