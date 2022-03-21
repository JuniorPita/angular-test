import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name:string = 'Card name';
  public number:string = '0000 0000 0000 0000';
  public amount:string = '4989,33₽';
  public expirationDate:string = '02/33';
}
