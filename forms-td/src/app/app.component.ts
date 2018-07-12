import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('f') sampleForm: NgForm;

  onSubmit(){
    console.log(this.sampleForm.value.email);
    console.log(this.sampleForm.value.subscription);
    console.log(this.sampleForm.value.password);
  }
  
}