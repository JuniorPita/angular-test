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

  public name = 'Card name';
  public number = '0000 0000 0000 0000';
  public amount = '4989,33₽';
  public expirationDate = '02/33';
}
