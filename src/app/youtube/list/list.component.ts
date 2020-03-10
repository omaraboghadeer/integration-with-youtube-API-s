import { Component, OnInit, ViewChild } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['image', 'title', 'desc', 'action'];
  dataSource: MatTableDataSource<any>;

  items: any;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.getVideos();
  }

  getVideos() {
    this.youtubeService.getVideosLists('UCF2efwMAsSisB1KNiBKTFIQ', '10')
    .subscribe(res => {
      this.dataSource = res['items'];
      console.log(this.dataSource);
    }, err => console.log(err));
  }
}
