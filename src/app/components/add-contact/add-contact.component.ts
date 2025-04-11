import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AIconComponent } from '../a-icon/a-icon.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-add-contact',
  imports: [RouterLink, FormsModule, AIconComponent, LoadingComponent],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.scss'
})
export class AddContactComponent {

router = inject(Router);
apiService = inject(ApiService);

name = signal('');
email = signal('');
phone = signal('');

saving = signal(false);
async save() {
  this.saving.set(true);
  this.apiService.addContact({
    id:'',
    name: this.name(),
    email: this.email(),
    phone: this.phone()
  }).then(() => {
    this.saving.set(false);
   this.router.navigate(['/']); 
  });
}
}
