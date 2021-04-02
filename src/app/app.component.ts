import { Component } from '@angular/core';
import { CatService } from '../services/cat.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    CatService
  ]
})
export class AppComponent {

  public title: string = 'Cat Carousel 🐱';
  public cats = [];
  constructor(
    private _catService: CatService
  ) {

  }
  ngOnInit() {
    for (let i = 0; i <= 2; i++) {
      this._catService.getCat().subscribe(
        result => {
          this.cats.push(result[0].url);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  nextCat() {
    this._catService.getCat().subscribe(
      result => {
        this.cats.splice(this.cats[0], 1);
        this.cats.push(result[0].url);
      },
      error => {
        console.log(error)
      }
    )
  }
}
