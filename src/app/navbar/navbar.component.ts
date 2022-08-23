import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	showMenu: boolean = false;
	showOptionsUser: boolean = false;

	user: any;

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
