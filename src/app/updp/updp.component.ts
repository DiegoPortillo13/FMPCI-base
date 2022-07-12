import { Component, OnInit } from '@angular/core';
import { listData } from './prio';
import { stData } from './status';

@Component({
  selector: 'app-updp',
  templateUrl: './updp.component.html',
  styleUrls: ['./updp.component.scss']
})
export class UpdpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list = listData;
  status= stData;
}
