import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/index';
import { UserRegistration } from 'models';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: 'register.html'
})
export class RegisterComponent {
    errorRegister= "";
    @ViewChild(NgForm)
    ngForm: NgForm;
    model = new UserRegistration();
    constructor(
        private registrationService: RegistrationService,
        private router: Router
    ) { }

    register() {
        if (this.ngForm.form.invalid) {
            return;
        }
        else {
            console.log(this.registrationService.usernameExists(this.model.username));

            this.registrationService.usernameExists(this.model.username)
                .then(e => {
                    if (e === true) {
                        this.errorRegister = "Nom d'utilisateur déjà existant";
                    }
                    else {
                        this.registrationService.register(this.model)
                            .then(
                            () => { console.log("ok"); this.router.navigateByUrl("/login"); },
                        );
                    }
                });
        }


    }
}


