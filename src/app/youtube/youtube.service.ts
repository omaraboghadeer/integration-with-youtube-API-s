import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  youtubeURL = 'https://www.googleapis.com/youtube/v3/search?key=';
  videoURL = 'https://www.googleapis.com/youtube/v3/videos?key=';
  activitiesURL = 'https://www.googleapis.com/youtube/v3/activities?key=';
  commentsURL = 'https://www.googleapis.com/youtube/v3/comments?key=';
  apiKey = 'AIzaSyDnp5FXuoI6cC08aCLGyfZBA3KAIgQCjA4';
  constructor(private http: HttpClient) { }

  getVideosLists(channelId, maxResults): Observable<{}> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.youtubeURL + this.apiKey + '&channelId=' + channelId + '&order=date&part=snippet&type=video,id&maxResults=' + maxResults)
    .pipe(map(res => {
      return res;
    }));
  }

  getActivities(channelId): Observable<{}> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.activitiesURL + this.apiKey + '&channelId=' + channelId + '&order=date&part=snippet,statistics&type=video,id')
    .pipe(map(res => {
      return res;
    }));
  }

  getVideoDetails(id) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.videoURL + this.apiKey + '&id=' + id + '&part=snippet' )
    .pipe(map(res => {
      return res;
    }));
  }

  getComments(id) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.commentsURL + this.apiKey + '&id=' + id + '&part=snippet' )
    .pipe(map(res => {
      return res;
    }));
  }
}
