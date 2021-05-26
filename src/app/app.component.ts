import { Component, VERSION, OnInit } from '@angular/core';
import { map, tap, take } from 'rxjs/operators';
import { of, from, throwError } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  ngOnInit() {
    of(1, 2, 3, 4, 0)
      .pipe(
        tap(x => `original item: ${x}`),
        map(x => x * 2),
        map(x => x - 0),
        map(item => {
          if (item === 0) {
            throw new Error('Zero detected');
          }
          return item;
        }),
        take(7)
      )
      .subscribe(console.log);
  }
}
