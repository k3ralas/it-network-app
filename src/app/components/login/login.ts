import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'models';

import { AuthenticationService } from '../../services/index';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent {
    model = new UserLogin();
    error: string;
    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) { }

    login() {
        this.authService.authenticate(this.model).then(
            () => { console.log("ok"); this.router.navigateByUrl("/"); },
        )
            .catch((ex) => {
                this.error = "Nom d'utilisateur ou Mot de passe invalide"
                
            });
    }
}
