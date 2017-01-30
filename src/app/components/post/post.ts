import { Component, Input } from '@angular/core';
import { Post, Like } from 'models';
import { PostService, PostSocketService, LoggedUser, MessageParser } from 'services';

@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent { 
    @Input() post: Post;
    
    constructor(
        private postSocket: PostSocketService, 
        private user: LoggedUser,
        private postService: PostService,
        private parser: MessageParser
    ) {}

    ngOnInit() { 
        this.post.content = this.parser.parse(this.post);   
        this.postSocket.onLike(this.OnLike);
    }

    LikePost(){
        this.postService.like(this.post);
    }

     OnLike = (like:Like) => {
         if(like.post.id===this.post.id && like.user.id===this.user.id) this.post.liked=true;
    }
}
