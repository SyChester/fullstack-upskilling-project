import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CapabilitiesService, UserDetails } from './capabilities.service';
export interface TableElement {
  name: string;
  workday: string;
  title: string;
  project: string;
  date: string;
}

const ELEMENT_DATA: TableElement[] = [
  {name: 'Jeniffer', workday: '234545', title: 'Assoc', project: 'GN', date: '2022-12-12'},
  {name: 'Alisson', workday: '934234', title: 'Intermediate', project: 'TripX', date: '2022-10-02'},
  {name: 'Bob', workday: '935235', title: 'Senior', project: 'Bank', date: '2021-12-11'},
  {name: 'Jeniffer', workday: '234545', title: 'Assoc', project: 'GN', date: '2022-12-12'},
  {name: 'Alisson', workday: '934234', title: 'Intermediate', project: 'TripX', date: '2022-10-02'},
  {name: 'Bob', workday: '935235', title: 'Senior', project: 'Bank', date: '2021-12-11'},
  {name: 'Jeniffer', workday: '234545', title: 'Assoc', project: 'GN', date: '2022-12-12'},
  {name: 'Alisson', workday: '934234', title: 'Intermediate', project: 'TripX', date: '2022-10-02'},
  {name: 'Bob', workday: '935235', title: 'Senior', project: 'Bank', date: '2021-12-11'},
  {name: 'Jeniffer', workday: '234545', title: 'Assoc', project: 'GN', date: '2022-12-12'},
  {name: 'Alisson', workday: '934234', title: 'Intermediate', project: 'TripX', date: '2022-10-02'},
  {name: 'Bob', workday: '935235', title: 'Senior', project: 'Bank', date: '2021-12-11'},
  {name: 'Jeniffer', workday: '234545', title: 'Assoc', project: 'GN', date: '2022-12-12'},
  {name: 'Alisson', workday: '934234', title: 'Intermediate', project: 'TripX', date: '2022-10-02'},
  {name: 'Bob', workday: '935235', title: 'Senior', project: 'Bank', date: '2021-12-11'}
];

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.css']
})
export class CapabilitiesComponent implements OnInit {
  firstName = '';
  lastName = '';
  resourceId = '';
  search = '';
  displayedColumns = ['name', 'workday', 'title', 'project', 'date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  userDetails: UserDetails;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private service: CapabilitiesService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as {
      firstName: string,
      lastName: string,
      resourceId: string,
    };

    this.firstName = state.firstName;
    this.lastName = state.lastName;
    this.resourceId = state.resourceId;
  }

  ngOnInit(): void {
    this.userDetails = this.service.getUserDetails(this.resourceId);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

}
