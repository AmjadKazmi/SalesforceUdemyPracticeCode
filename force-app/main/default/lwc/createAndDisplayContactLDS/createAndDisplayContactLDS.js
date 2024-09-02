import { LightningElement,wire } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';
import CONTACT_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import CONTACT_PHONE_FIELD from '@salesforce/schema/Contact.Phone';

export default class CreateAndDisplayContactLDS extends LightningElement {
    name = '';
    email = '';
    phone = '';
    
    contactId;
    contact;

    @wire(getRecord, { recordId: '$contactId', fields: [CONTACT_NAME_FIELD, CONTACT_EMAIL_FIELD, CONTACT_PHONE_FIELD] })
    handleContactData({ error, data }) {
        if (data) {
            this.contact = data;
            console.log('Contact record fetched successfully', data);
        } else if (error) {
            console.error('Error fetching contact record', error);
        }
    }


    contactChangeHandler(event) {
        const field = event.target.dataset.id;
        this[field] = event.target.value;
    }

    createContact() {
        console.log(this.name + "  " + this.email + "  " + this.phone);
        createRecord({ apiName: 'Contact',
           fields: {
                'LastName': this.name,
                'Email': this.email,
                'Phone': this.phone            
            }
        }).then(response => {
            console.log('Contact has been created successfully ', response.id);
            this.contactId = response.id;
            clearForm();
        }).catch(error => {
            console.log('Error in creating contact: ', error.body.message);
            });
    }

    get contactDetails() {
        return this.contact
            ? {
                  name: this.contact.fields.LastName.value,
                  email: this.contact.fields.Email.value,
                  phone: this.contact.fields.Phone.value
              }
            : {};
    }
     
    clearForm() {
        this.name = '';
        this.email = '';
        this.phone = '';
    }
}