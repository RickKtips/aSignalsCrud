import { Component, signal, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
  @ViewChild('contactForm') contactForm!: NgForm;

router = inject(Router);
apiService = inject(ApiService);

name = signal('');
email = signal('');
phone = signal('');

saving = signal(false);
async save() {
  if (this.contactForm && !this.contactForm.form.valid) {
    // Optionally, log an error or notify the user, though button disabling should prevent this.
    console.error('Attempted to save with an invalid form.');
    return;
  }
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
