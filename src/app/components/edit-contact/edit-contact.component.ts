import { Component, computed, inject, input, linkedSignal, resource, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AIconComponent } from '../a-icon/a-icon.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-edit-contact',
  imports: [RouterLink, FormsModule, AIconComponent, LoadingComponent],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.scss'
})
export class EditContactComponent {
id = input.required<string>();

apiService = inject(ApiService);
router = inject(Router);

name = linkedSignal(() => this.contactResource.value()?.name ?? '');
email = linkedSignal(() => this.contactResource.value()?.email ?? '');
phone = linkedSignal(() => this.contactResource.value()?.phone ?? '');

saving = signal(false);
loading = computed(() => this.contactResource.isLoading() || this.saving());

contactResource = resource({
  request: this.id,
  loader: ({request : id}) => this.apiService.getContact(id)

});

async save() {
  this.saving.set(true);
  this.apiService.updateContact({
    id: this.id(),
    name: this.name(),
    email: this.email(),
    phone: this.phone()
  }).then(() => {
    this.saving.set(false);
    this.router.navigate(['/']);
   });


}

}
