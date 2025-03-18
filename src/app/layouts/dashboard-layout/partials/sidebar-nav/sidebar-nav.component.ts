import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dashboard-layout-sidebar-nav',
  imports: [],
  templateUrl: './sidebar-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarNavComponent {

  public navItems = [
    {
      title: 'Dashboard',
      description: 'Data Overview',
      icon: 'dashboard',
      href: '#',
      active: true
    },
    {
      title: 'Database',
      description: 'Database Manager',
      icon: 'database',
      href: '#',
      active: false
    },
    {
      title: 'Cloud Storage',
      description: 'Manage Cloud Storage',
      icon: 'cloud',
      href: '#',
      active: false
    },
    {
      title: 'Reports',
      description: 'Manage Reports',
      icon: 'report',
      href: '#',
      active: false
    },
    {
      title: 'Security',
      description: 'Generate Security Keys',
      icon: 'security',
      href: '#',
      active: false
    },
    {
      title: 'Extensions',
      description: 'Manage Extensions',
      icon: 'extensions',
      href: '#',
      active: false
    },
    {
      title: 'Settings',
      description: 'Edit App Settings',
      icon: 'settings',
      href: '#',
      active: false
    }
  ];
}
