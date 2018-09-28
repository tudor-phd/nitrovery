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
  public activePeople: any;
  public inactivePeople: any;
  public dialogRowInfo: any;
  constructor(public dataService: DatacollectionService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataService.getPeople().subscribe((data: Array<object>) => {
      var active = [];
      var inactive = [];
      this.people = data;
      for (let i = 0; i < data.length; i++) {
        if (data[i]['isActive']) {
          active.push(data[i]);
          this.activePeople = active;
        }
        if (!data[i]['isActive']) {
          inactive.push(data[i]);
          this.inactivePeople = inactive;
        }
      }
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
  public searchOrigin: string;
  public searchDestination: string;
  public searchCompany: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }
}