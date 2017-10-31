import { Component, OnInit } from '@angular/core';
import { Logger } from "angular2-logger/core"; // ADD THIS

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  constructor(private _logger: Logger) { this._logger.error('This is a priority level 1 error message...'); }

  ngOnInit() {

  }

}
