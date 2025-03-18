import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarLogoComponent } from '../sidebar-logo/sidebar-logo.component';
import { SidebarProfileComponent } from '../sidebar-profile/sidebar-profile.component';
import { SidebarNavComponent } from '../sidebar-nav/sidebar-nav.component';

@Component({
  selector: 'dashboard-layout-sidebar',
  imports: [RouterOutlet, SidebarLogoComponent, SidebarProfileComponent, SidebarNavComponent,],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent { }
