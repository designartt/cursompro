import { Client } from './client.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {


  @Input() name: string;
  @Input('othername') lastname: string;
  @Input() age: number;

  clients: Client[];

  constructor() { 
    this.clients = [
      {id:1, name: "Bob", age: 30},
      {id:2, name: "Ana", age: 21},
      {id:3, name: "John", age: 18},
      {id:4, name: "Liz", age: 2},
    ];
  }

  ngOnInit() {
  }

}
