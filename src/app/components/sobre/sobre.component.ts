import { Component } from '@angular/core';
import { AIconComponent } from '../a-icon/a-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre',
  imports: [RouterLink, AIconComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
