import { Component, OnInit } from '@angular/core';
import { DatacollectionService } from "src/app/datacollection.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
    // Pie
    public pieChartLabels:string[] = [];
    public pieChartData:number[] = [0,0,0];
    public pieChartType:string = 'pie';

  constructor(public dataService: DatacollectionService) { }

  ngOnInit() {
    this.dataService.getPeople().subscribe((data: Array<object>) => {
      let numComp = [];
      for (let i = 0; i < data.length; i++) {
        this.pieChartLabels.push(data[i]['name']);
        numComp.push(data[i]['flights'].length)
      }
      this.pieChartData = numComp
    })
  }

 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
