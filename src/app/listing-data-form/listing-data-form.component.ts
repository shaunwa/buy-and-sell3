import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ListingStub } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText;
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = '';

  @Output() onSubmit = new EventEmitter<ListingStub>();

  name: string;
  description: string;
  price: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked() {
    this.onSubmit.emit({
      name: this.name,
      description: this.description,
      price: Number(this.price),
    });
  }
}
