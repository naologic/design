import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'loader-bounce',
  templateUrl: './loader-bounce.component.html',
  styles: [`
    .spinner-bounce {
      position: relative;
      margin: 0 auto;
    }

    .double-bounce1, .double-bounce2 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;

      -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
      animation: sk-bounce 2.0s infinite ease-in-out;
    }

    .double-bounce1 {
        background-color: #3E40DB;
    }

    .double-bounce2 {
      background-color: #7880FF;
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }

    @-webkit-keyframes sk-bounce {
      0%, 100% { -webkit-transform: scale(0.0) }
      50% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-bounce {
      0%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
      } 50% {
          transform: scale(1.0);
          -webkit-transform: scale(1.0);
        }
    }
  `]
})
export class LoaderBounceComponent implements OnInit {
  @Input() size = '40px';

  constructor() { }

  ngOnInit() {
  }

}
