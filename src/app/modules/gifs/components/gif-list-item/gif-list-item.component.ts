import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'gifs-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListItemComponent {

  url = input.required<string>();

}
