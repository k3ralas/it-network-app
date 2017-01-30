import { Component, Input, Pipe } from '@angular/core';
import { PostContent, VideoPostContent } from 'models';
@Component({
    templateUrl: 'video-post-content.html',
    selector: 'video-post-content'
})
export class VideoFeedContent {
    @Input() postContent: VideoPostContent = new VideoPostContent("");
    constructor(){};
}
