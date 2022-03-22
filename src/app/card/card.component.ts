import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  VisaSystem: boolean = true;

  @Input()
    name:any

  @Input()
    number:any

  @Input()
    amount:any

  @Input()
    expirationDate:any

  @Input()
    paymentSystem:any

  ngOnInit(): void {
    if (this.paymentSystem === 'Mastercard') {
      this.VisaSystem = !this.VisaSystem;
    }
  }
}
