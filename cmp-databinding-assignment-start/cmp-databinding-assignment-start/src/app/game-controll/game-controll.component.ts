import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements OnInit {

  @Output() gameCount: EventEmitter<number> = new EventEmitter();
  interval;
  con: number = 0;

  constructor() {
    
   }

  ngOnInit(): void {
  }

  onStartGame()
  {
    this.interval = setInterval(() => {
      this.con++;
      this.gameCount.emit(this.con);
    },1000)
  }

onStopGame()
{
  clearInterval(this.interval);
}
}
