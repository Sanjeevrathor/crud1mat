import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { leaveModel } from '../leaveModel';
@Component({
  selector: 'app-apply-udpate',
  templateUrl: './apply-udpate.component.html',
  styleUrls: ['./apply-udpate.component.css']
})
export class ApplyUdpateComponent {
  displayedColumns: string[] = ['employeeid', 'formdate', 'todate', 'reason', 'action'];
  dataSource!: MatTableDataSource<any>;
  public dataid:any
  public leave:leaveModel ={} as leaveModel;
  constructor( private router:Router, private api:ApiService, private activeRoute:ActivatedRoute){}
  
  ngOnInit(){
    this.activeRoute.paramMap.subscribe(data=>{
      
       this.dataid = data.get('id')
     
    })

    this.api.fechdata(this.dataid).subscribe((data:any)=>{{
      this.leave =data;
      console.log(this.leave)
    }})
  }
  udpatedatadd(){
    this.api.udpate(this.leave, this.dataid).subscribe((data:any)=>{
      alert('update successfuly');
      this.router.navigate(['viewleave'])
    })
  }
}
