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
      strings: ['Innovation.', 'Discovery.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };

    const typed = new Typed('.typed-element', options);
  }
}
