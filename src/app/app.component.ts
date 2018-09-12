import { Component, OnInit } from '@angular/core';
import { CatService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'cats-web';

  constructor(private catService:CatService){

  }

  ngOnInit(): void {
    this.catService.getAllCats().subscribe(
      cats=>{
        console.log(cats);
      }
    );
  }

}
