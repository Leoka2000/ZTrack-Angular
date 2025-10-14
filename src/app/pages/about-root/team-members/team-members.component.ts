import { Component } from '@angular/core';
import { BgShadesComponent } from '../../../bg-shades/bg-shades.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [BgShadesComponent, MatIconModule],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent {

}
