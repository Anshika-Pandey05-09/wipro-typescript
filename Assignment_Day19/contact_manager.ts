interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}


class ContactManager {
    private contacts: Contact[] = [];

    // Add new contact
    addContact(contact: Contact): void {
        const exists = this.contacts.some(c => c.id === contact.id);
        if (exists) {
            console.error(`❌ Contact with ID ${contact.id} already exists.`);
            return;
        }
        this.contacts.push(contact);
        console.log(`✅ Contact "${contact.name}" added successfully.`);
    }

    // View all contacts
    viewContacts(): Contact[] {
        return this.contacts;
    }

    // Modify existing contact
    modifyContact(id: number, updatedContact: Partial<Contact>): void {
        const contact = this.contacts.find(c => c.id === id);
        if (!contact) {
            console.error(`❌ Contact with ID ${id} not found.`);
            return;
        }
        Object.assign(contact, updatedContact);
        console.log(`✅ Contact with ID ${id} modified successfully.`);
    }

    // Delete contact
    deleteContact(id: number): void {
        const index = this.contacts.findIndex(c => c.id === id);
        if (index === -1) {
            console.error(`❌ Contact with ID ${id} not found.`);
            return;
        }
        const removed = this.contacts.splice(index, 1)[0];
        console.log(`✅ Contact "${removed.name}" deleted successfully.`);
    }
}


// Test script
const manager = new ContactManager();

// Add contacts
manager.addContact({ id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890" });
manager.addContact({ id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9876543210" });

// View contacts
console.log("📋 Contact List:", manager.viewContacts());

// Modify a contact
manager.modifyContact(1, { phone: "1112223333" });

// Delete a contact
manager.deleteContact(2);

// Try to modify a non-existing contact
manager.modifyContact(3, { email: "new@example.com" });

// Try to delete a non-existing contact
manager.deleteContact(5);

// Final list
console.log("📋 Final Contact List:", manager.viewContacts());


// Output
//  [
//   {
//     id: 1,
//     name: 'John Doe',
//     email: 'john@example.com',
//     phone: '1112223333'
//   }
// ]