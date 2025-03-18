import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'dashboard-layout-sidebar-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarNavComponent {

  public navItems = signal([
    {
      title: 'Trending',
      description: 'Gifs Populares',
      icon: 'fa-solid fa-chart-line',
      href: '/dashboard/trending',
    },
    {
      title: 'Buscador',
      description: 'Buscar gifs',
      icon: 'fa-solid fa-magnifying-glass',
      href: '/dashboard/search',
    },
  ]);
}
