import { Component, OnInit } from '@angular/core';
import { botData } from './bot-data';

@Component({
  selector: 'app-pro-botones',
  templateUrl: './pro-botones.component.html',
  styleUrls: ['./pro-botones.component.scss']
})
export class ProBotonesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  botData=botData;

}
