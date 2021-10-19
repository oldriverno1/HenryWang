import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const options = {
      strings: ['FrameWork I use for front-end: Angular', 'FrameWork I use for back-end: Spring boot'],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true, // Default value
      loop: true,
    };

    const typed = new Typed('.typed-element', options);
  }
}
