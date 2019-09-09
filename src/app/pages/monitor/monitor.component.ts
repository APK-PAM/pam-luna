import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DataStore, Monitor} from '@app/globals';

@Component({
  selector: 'pages-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class PagesMonitorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    DataStore.NavShow = false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      Monitor.token = params['token'];
      Monitor.type = 'term';
    });
  }
}
