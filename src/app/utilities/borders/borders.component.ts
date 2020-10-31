import { Component, OnInit } from '@angular/core';
import { UtilityCodeBlocks } from './borders.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-borders',
  templateUrl: './borders.component.html',
})
export class BordersComponent implements OnInit {
  public data = UtilityCodeBlocks;
  constructor(public readonly appService: AppService) { }

  ngOnInit() {
  }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }

}
