import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalDirective } from 'ng2-bootstrap';
import { ChannelService } from 'services';

@Component({
    selector: 'add-channel',
    templateUrl: 'add-channel.html'
})
export class AddChannelComponent {
    @ViewChild(ModalDirective) 
    modal:ModalDirective;
    @ViewChild(NgForm) 
    ngForm:NgForm;

    model =  {name: ''};
    
    constructor(
        private ChannelServ : ChannelService
    ) {
    }

    save() {
        console.log(this.model.name)
        if (this.ngForm.valid) {
            console.log(this.ngForm.valid)
            this.ChannelServ.add(this.model.name);
        }
    }
}