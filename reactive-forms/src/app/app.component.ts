import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  statusList = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;
  invalidProjectNames = ['Test'];

  ngOnInit(){
    this.projectForm = new FormGroup({
      'project': new FormControl(null, Validators.required, this.invalidProjectName.bind(this)),
      'mail': new FormControl(null,[Validators.required, Validators.email]),
      'status': new FormControl('Finished')
    });
  }

  onSubmit(){
    console.log(this.projectForm.value);
  }

  invalidProjectName(control: FormControl): Promise<any> | Observable<any>{
    
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
          if(this.invalidProjectNames.indexOf(control.value) !== -1){
            resolve({invalidProjectName: true});
          }
          else{resolve(null);}
      },1500);
    });
    return promise;
  }
}
