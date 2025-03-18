import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from './partials/sidebar/sidebar.component';

@Component({
  selector: 'layout-dashboard-page',
  imports: [SidebarComponent],
  templateUrl: './dashboard-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardLayoutComponent { }