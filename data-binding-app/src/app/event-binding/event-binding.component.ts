import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My Button";
  i = 0;

  constructor() { }

  spinnerMode = "determinate";
  btnEnable = true;
  selDesabled = false;
  selectedOption = 1;

  ngOnInit() {
  }

  save() {
    console.log("Clicou");
  }
  inc() {
    this.i++;
    this.buttonName = "It was clicked " + this.i + " times.";
  }
  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 3000);
  }

  cbChange(event) {
    console.log(event.checked);
    this.selDesabled = event.checked;
  }

  selectionChange(event) {
    console.log(event);
    this.selectedOption = event.value;
  }

}
