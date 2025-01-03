import { Component, OnInit } from '@angular/core';
import { Formation } from '../../Models/formation';
import { Session } from '../../Models/session';
import { FormationServiceService } from '../../Services/formation-service.service';
import { SessionServiceService } from '../../Services/session-service.service';
import { FormateurServiceService } from '../../Services/formateur-service.service';
import { ActivatedRoute } from '@angular/router';
import { Candidat } from '../../Models/candidat';

@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrl: './details-formation.component.css'
})
export class DetailsFormationComponent implements OnInit {
  // Initialisation pour éviter les erreurs "undefined"
  formation = new Formation("", "", "", 0, "", "débutant", [], []);
  sessions: Session[] = [];
  //nomFormateurs?: string;
  //nomCandidat: string = '';
  //prenomCandidat: string = '';
  //emailCandidat: string = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private formationService: FormationServiceService,
    private sessionService: SessionServiceService,
    private formateurService: FormateurServiceService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.formationService.getFormationById(params['id']).subscribe((formation) => {
        this.formation = formation;
  
        this.sessionService.getSessionsByFormationId(formation.id).subscribe((sessions) => {
          this.sessions = sessions
          //this.sessions = sessions.map((session) => ({
            //nomsFormateurs: this.getNomsFormateurs(session.formateurs),
          //}));
        });
      });
    });
  }

  

  /* openInscriptionModal(session: Session): void {
    if (session.candidats.length < 15) {
      const candidat: Candidat = new Candidat(
        '', 
        this.nomCandidat, 
        this.prenomCandidat, 
        this.emailCandidat, 
        0,
        '',
        '' 
      );

      session.candidats.push(candidat.id);
      this.sessionService.updateSession(session).subscribe((updatedSession) => {
        alert("Inscription réussie !");
      });

      this.nomCandidat = '';
      this.prenomCandidat = '';
      this.emailCandidat = '';
    } else {
      alert("Le nombre de candidats inscrits est déjà complet.");
    }
  }*/

}
