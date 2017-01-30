import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PostService, MessageParser } from '../../services/index';
import { Post } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-inputs',
    templateUrl: 'user-inputs.html'
})
export class UserInputsComponent {

    @Input() channelId: string;
    message:string;
    errorPost: string;

    constructor(
        private postervice: PostService
    ) {
    }

    send() {
        this.postervice.post(this.channelId, this.message)
        .then(
            () => {this.message = "" }
        )
        .catch((ex) => {
                this.errorPost = ex                
            });
    }
}
