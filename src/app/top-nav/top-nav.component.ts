import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor() { }

  title = 'mdb-angular-ui-kit-free';

  search(value: string) {
    console.log(value);
  }

  ngOnInit(): void {
  }

}
