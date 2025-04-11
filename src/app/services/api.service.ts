import { Injectable } from '@angular/core';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private delay = 3000; // Simulador de delay para requisições
  private contacts: Contact[] = [
    {
      id: '1',
      name: 'Renato Gonçalves',
      phone: '21 9999-99990',
      email: 'ren@smh.com.au',
    },
    {
      id: '2',
      name: 'João da Silva',
      phone: '11 9888-88880',
      email: 'joao.silva@email.com',
    },
    {
      id: '3',
      name: 'Sara Joaquina',
      phone: '11 9874-56780',
      email: 'sarah.j@email.com',
    },
    {
      id: '4',
      name: 'Michael Pereira',
      phone: '11 9765-43210',
      email: 'mper@email.com',
    },
    {
      id: '5',
      name: 'Emanuele Oliveira',
      phone: '11 9654-32100',
      email: 'emma.o@email.com',
    },
    {
      id: '6',
      name: 'James David',
      phone: '21 9543-21009',
      email: 'james.d@email.com',
    },
    {
      id: '7',
      name: 'Lisa Garcia',
      phone: '11 9432-10989',
      email: 'lisa.g@email.com',
    },
    {
      id: '8',
      name: 'David Maranhão',
      phone: '11 9321-09876',
      email: 'david.m@email.com',
    }
  ];

  private generateUniqueId(): string {
    const existingIds = this.contacts.map((c) => parseInt(c.id));
    const maxId = Math.max(...existingIds);
    return (maxId + 1).toString();
  }

  async getContacts(): Promise<Contact[]> {
    await this.simulateDelay();

    // throw new Error('Error fetching contacts');

    return [...this.contacts];
  }

  async addContact(contact: Contact): Promise<Contact> {
    await this.simulateDelay();
    const newContact = {
      ...contact,
      id: this.generateUniqueId(),
    };
    this.contacts = [newContact, ...this.contacts];
    return newContact;
  }

  async deleteContact(id: string): Promise<void> {
    await this.simulateDelay();
    this.contacts = this.contacts.filter((c) => c.id !== id);
  }

  async updateContact(updatedContact: Contact): Promise<Contact> {
    await this.simulateDelay();
    const index = this.contacts.findIndex((c) => c.id === updatedContact.id);
    if (index === -1) {
      throw new Error('Contact not found');
    }
    this.contacts[index] = updatedContact;
    return updatedContact;
  }

  async getContact(id: string): Promise<Contact> {
    await this.simulateDelay();
    const contact = this.contacts.find((c) => c.id === id);
    if (!contact) {
      throw new Error('Contact not found');
    }
    return contact;
  }

  private simulateDelay(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, this.delay));
  }
}
