import { Component, OnInit } from "@angular/core";
/*import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';*/
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	showMenu: boolean = false;
	showOptionsUser: boolean = false;

	userImg = faker.image.avatar();
    userName = faker.name.fullName();
  	userEmail = faker.internet.email();	
	
	constructor() {}

	ngOnInit(): void {
	}
  
	openMenu() {
		(!this.showMenu) ? this.showMenu = true : this.showMenu = false;
	}

	openOptionsUser() {
		(
			!this.showOptionsUser
		) ? this.showOptionsUser = true : this.showOptionsUser = false;
	}

}
