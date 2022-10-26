import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResourcesService } from './resources.service';
import { TableElement, UserDetails } from './dto/resources.dto';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  firstName = '';
  lastName = '';
  resourceId = '';
  search = '';
  displayedColumns = ['name', 'workday', 'title', 'project', 'date'];
  dataSource = new MatTableDataSource<TableElement>;
  userDetails: UserDetails;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private service: ResourcesService) {
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
    this.dataSource = new MatTableDataSource(this.service.getResources(this.resourceId));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
