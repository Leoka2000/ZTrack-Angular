import { Component } from '@angular/core';
import { BgShadesComponent } from '../../../bg-shades/bg-shades.component';
import { MatIconModule } from '@angular/material/icon';
import { BgShadesBottomComponent } from "../../../bg-shades-bottom/bg-shades-bottom.component";

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [BgShadesComponent, MatIconModule, BgShadesBottomComponent],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent {

}
