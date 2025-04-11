import { Component,NgZone, input, computed} from '@angular/core';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'aIcon',
  imports: [LottieComponent],
  templateUrl: './a-icon.component.html',
  styleUrl: './a-icon.component.scss'
})
export class AIconComponent  {
private animationItem!: AnimationItem;
  
icon = input('');
texto = input('');
iconPath = computed(() => `/lottie/${this.icon()}.json`);

options = computed<AnimationOptions>(() => ({
  path: this.iconPath(),
  autoplay: false,
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
