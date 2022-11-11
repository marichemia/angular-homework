import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button type="button" class="btn">BUTTON</button>
  `,
  styles: [`
    .btn {
      width: 298px;
      height: 54px;
      border-radius: 25px;
      border: none;
      background-color: purple;
      color: rgb(117, 238, 47);
      font-size: 15px;
      font-weight: bold;

      position: relative;
      left: calc(50% - 144px);
      top: 50px;
    }

    .btn:hover {
    background-color: rgb(117, 238, 47);
    color: purple;
}
`]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
