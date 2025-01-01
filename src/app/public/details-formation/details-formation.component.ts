import { Component, OnInit } from '@angular/core';
import { Formation } from '../../Models/formation';
import { Session } from '../../Models/session';
import { FormationServiceService } from '../../Services/formation-service.service';
import { SessionServiceService } from '../../Services/session-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.css'],
})
export class DetailsFormationComponent implements OnInit {
  // Initialisation pour éviter les erreurs "undefined"
  formation = new Formation("", "", "", 0, "", "débutant", [], []);
  sessions: Session[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private formationService: FormationServiceService,
    private sessionService: SessionServiceService 
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.formationService.getFormationById(params['id']).subscribe((formation) =>{
        this.formation = formation;
        
        this.sessionService.getSessionsByFormationId(formation.id).subscribe(
          (sessions) => {this.sessions = sessions;});
      });
    });
  }
}
