import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
  <div>Operation Completed Successfully</div>
  `,
  styles: [`
    div {
    font-size: 25px;
    margin-top: 100px;
    font-weight: 700;
    color: rgb(51, 199, 58);
    background-color: rgb(204, 228, 248);
    width:510px;
    padding: 10px 45px;
    position: relative;
    left: calc(50% - 255px);
    border-radius: 10px;
    border: solid 2px rgb(117, 238, 47);
    font-family: sans-serif;
  }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
