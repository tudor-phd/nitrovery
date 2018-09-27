import { Component, OnInit, Inject } from '@angular/core';
import { DatacollectionService } from "src/app/datacollection.service";
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public people: any;
  public dialogRowInfo: any;
  constructor( public dataService: DatacollectionService, public dialog: MatDialog ) { 
  }

  ngOnInit() {
    this.dataService.getPeople().subscribe((data: Array<object>) => {
      console.log(data)
      this.people = data;
    });
  }

  public openDialog(element) {
    this.dialogRowInfo = element.flights;
    this.dialog.open(DialogDataInfo, {
      width: '900px',
      height: '700px',
      data: this.dialogRowInfo
    });
  }

  displayedColumns: string[] = ['picture', 'name', 'address', 'price', 'email', 'active', 'flights'];
}

@Component({
  selector: 'details-dialog',
  templateUrl: 'dialogs/details-dialog.html',
})
export class DialogDataInfo {
  constructor( @Inject(MAT_DIALOG_DATA) public data) { }
}