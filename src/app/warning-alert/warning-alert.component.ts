import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <div>Warning! Quitting Now Will Erase Your Progress</div>
  `,
  styles: [`
  div {
    font-size: 25px;
    margin-top: 50px;
    font-weight: 700;
    color: rgb(204, 192, 19);
    background-color: rgb(204, 228, 248);
    width:710px;
    padding: 10px 60px;
    position: relative;
    left: calc(50% - 355px);
    border-radius: 10px;
    border: solid 2px rgb(236, 215, 24);
    font-family: sans-serif;
  }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
