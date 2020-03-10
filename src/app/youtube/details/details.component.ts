import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id;
  video;
  constructor(
    private youtubeService: YoutubeService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log(this.id);
    // this.youtubeService.getActivities('UC_x5XG1OV2P6uZZ5FSM9Ttw')
    // .subscribe(res => console.log(res), err => console.log(err));
    this.getVideo();
    this.getComment();
  }

  getVideo() {
    this.youtubeService.getVideoDetails(this.id)
    .subscribe(
      res => {
        console.log(res);
        this.video = res['items'][0];
        // console.log(this.video);
      }
    , err => console.log(err));
  }

  getComment() {
    this.youtubeService.getComments(this.id)
    .subscribe(res => console.log('comments >> ',res), err => console.log(err));
  }
}
