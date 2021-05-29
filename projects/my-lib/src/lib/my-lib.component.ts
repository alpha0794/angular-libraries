import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>my-lib works!</p>
    <lib-custom></lib-custom>
  `,
  styles: [],
})
export class MyLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
