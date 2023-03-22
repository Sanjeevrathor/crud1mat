import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.css']
})
export class ViewLeaveComponent {
  displayedColumns: string[] = ['employeeid', 'formdate', 'todate', 'reason', 'action'];
  dataSource!: MatTableDataSource<any>;
  
  constructor(private api:ApiService){}
  ngOnInit(){
   this.displayLeave()
  }

  displayLeave(){
    this.api.viewLeave().subscribe({
      next:(res=>{
        this.dataSource = new MatTableDataSource(res);
      })
    })
  }
  delete(id:number){
    this.api.delete(id).subscribe(res=>{
      alert('leave cancel succeffuly!')
      this.displayLeave()
    })
  }
}
