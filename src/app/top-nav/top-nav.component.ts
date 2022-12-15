import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  searchValue: string = "";
  checkValue: string = "";
  // pattern: string = "^[a-fA-F0-9]{64}$"
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmit($event: any) {
    if($event.keyCode === 13){
      const value = this.searchValue;
      // const test = Validators.pattern('^[a-fA-F0-9]{64}$')
      // const test = value.match(this.pattern);
      this.router.navigate(['hash-txs'], {
        relativeTo: this.route,
        queryParams: {
          'value': this.searchValue,
        },
        queryParamsHandling: 'merge',
      });
    }
  }


}
