import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alerts',
  templateUrl: './success-alerts.component.html',
  styleUrls: ['./success-alerts.component.css']
})
export class SuccessAlertsComponent implements OnInit {

  succesMessage = "Sucess message";
  
  constructor() { }
  ngOnInit(): void {
   
  }

}
