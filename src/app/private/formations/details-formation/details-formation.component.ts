import { Component, OnInit } from '@angular/core';
import { Formation } from '../../../Models/formation';
import { Session } from '../../../Models/session';
import { FormationServiceService } from '../../../Services/formation-service.service';
import { SessionServiceService } from '../../../Services/session-service.service';
import { FormateurServiceService } from '../../../Services/formateur-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrl: './details-formation.component.css',
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
        });
      });
    });
  }

  private getNomsFormateurs(formateurs: string[]): string {
    let noms: string[] = [];

    formateurs.forEach((formateurId) => {
      this.formateurService.getFormateurById(formateurId).subscribe((formateur) => {
        noms.push(formateur.nom);
      });
    });

    return noms.join(", ");
  }

}
