import { Component, computed, effect, inject, resource, signal } from '@angular/core';
import { Contact } from '../../model/contact.model';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';
import { AIconComponent } from '../a-icon/a-icon.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-contact-list',
  imports: [RouterLink, AIconComponent, LoadingComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {

apiService = inject(ApiService);

deleting = signal(false);
loading = computed(() => this.contactsResource.isLoading() || this.deleting());

contactsResource = resource({
  loader: () => this.apiService.getContacts()
});
async deleteContact(contactId: string) {
  this.deleting.set(true);
  this.apiService.deleteContact(contactId).then(() => {
    this.contactsResource.reload();
    this.deleting.set(false);
  });
};

showError = effect(() => {
  const error = this.contactsResource.error();
  if (error) {
    alert(error);
  }
});

}