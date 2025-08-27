import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from '../../components/cards/contact-card/contact-card.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ContactCardComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit {
  contacts: any[] = [];

  ngOnInit() {
    this.contacts = [
      {
        id: 1,
        type: 'linkedin',
        title: 'LinkedIn',
        value: 'tu-nombre',
        url: 'https://linkedin.com/in/tu-nombre',
        description: 'Perfil profesional y red de contactos'
      },
      {
        id: 2,
        type: 'infojobs',
        title: 'InfoJobs',
        value: 'tu-perfil',
        url: 'https://www.infojobs.net/tu-perfil',
        description: 'Perfil en la plataforma de empleo'
      },
      {
        id: 3,
        type: 'email',
        title: 'Email',
        value: 'tu@email.com',
        description: 'Para contacto profesional'
      },
      {
        id: 4,
        type: 'phone',
        title: 'Teléfono',
        value: '+34 600 123 456',
        description: 'Disponible en horario laboral'
      },
      {
        id: 5,
        type: 'github',
        title: 'GitHub',
        value: 'tu-usuario',
        url: 'https://github.com/tu-usuario',
        description: 'Repositorios y proyectos'
      },
      {
        id: 6,
        type: 'website',
        title: 'Portfolio',
        value: 'www.tuportfolio.com',
        url: 'https://www.tuportfolio.com',
        description: 'Mi portfolio personal'
      }
    ];
  }
}