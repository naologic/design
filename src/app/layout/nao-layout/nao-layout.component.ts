import {Component, OnInit} from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-nao-layout',
  templateUrl: './nao-layout.component.html',
})
export class NaoLayoutComponent implements OnInit {

  constructor(public readonly appService: AppService) { }

  ngOnInit() {
  }

}
