import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifService } from '../../services/gif.service';

@Component({
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent implements OnInit {

  gifService = inject(GifService);

  imageUrls = signal<string[]>([]);

  ngOnInit(): void {
    setTimeout(() => {
      this.gifService.loadTrendingGifs().subscribe(
        response => {
          const lista = response.data.map(gif => gif.images.original.url)
          this.imageUrls.set(lista);
        }
      );
    }, 2000);
  }
}
