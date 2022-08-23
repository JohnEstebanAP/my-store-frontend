import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  trainingLeagues: any[] = [];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addTrainingLeagues();
  }

  addTrainingLeagues() {
   /* this.trainingLeagueApiService
      .getTrainingLeague()
      .subscribe((trainingLeague) => (this.trainingLeagues = trainingLeague));*/
  }

  startButton($event: any) {
    const element = $event.target.id;
    localStorage.setItem('idTraining', JSON.stringify(element));
    this.router.navigate(['list/registro-postulation']);
  }
}
