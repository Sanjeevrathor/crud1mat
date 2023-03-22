import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { leaveModel } from '../leaveModel';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  public leave:leaveModel ={} as leaveModel;
  constructor(private apiserve:ApiService, private router:Router){}

  ngOnInit(){

  }

  apply(){
    this.apiserve.applyleave(this.leave).subscribe(res=>{
      alert('create post successfuly!')
      this.router.navigate(['/viewleave'])
    })
  }

 
}
