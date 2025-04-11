import { Component,NgZone, computed, input} from '@angular/core';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'loader',
  imports: [LottieComponent],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent  {
private animationItem!: AnimationItem;
loading = input(false);  
loadingC = computed(() => this.loading());


options = computed<AnimationOptions>(() => ({
  path: `/lottie/loading.json`,
  autoplay: true,
  loop: true,
}));

  constructor(private ngZone: NgZone) {}

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  stop(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.stop();
    });
  }

  play(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.play();
    });
  }

}
