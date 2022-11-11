import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fail-alert',
  template: `
  <div>Fail! An Error Occurred</div>
`,
  styles: [`
div {
  font-size: 25px;
  margin-top: 50px;
  font-weight: 700;
  color: red;
  background-color: rgb(204, 228, 248);
  width:380px;
  padding: 10px 40px;
  position: relative;
  left: calc(50% - 190px);
  border-radius: 10px;
  border: solid 2px red;
  font-family: sans-serif;
}
`]
})
export class FailAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
