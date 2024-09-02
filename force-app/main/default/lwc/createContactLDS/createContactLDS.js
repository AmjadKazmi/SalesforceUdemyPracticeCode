import { LightningElement } from 'lwc';
import { createRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateContactLDS extends LightningElement {
    contactName;
    contactPhone;
    contactEmail;
    
    contactChangeHandler(event) {
        const field = event.target.dataset.id;
        if (field === 'name') {
            this.contactName = event.target.value;
        } else if (field === 'email') {
            this.contactEmail = event.target.value;
        } else if (field === 'phone') {
            this.contactPhone = event.target.value;
        }
    }

    createContact()
    {
        const fields = { 'LastName': this.contactName, 'Phone': this.contactPhone, 'Email': this.contactEmail };
        console.log('fields value'+fields.Email+' '+fields.LastName+' '+fields.Phone);
        const recordInput={apiName:'Contact',fields};
        createRecord(recordInput).then(response=>{
            console.log('Contact has been created successfully ', response.id);
            this.showToast('Success', 'Contact created successfully', 'success');
            this.clearForm();
        }).catch(error=>{
            console.log('Error in creating contact: ', error.body.message);
            this.showToast('Error creating record', error.body.message, 'error');
        });
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(event);
    }

    clearForm() {
        this.contactName = '';
        this.contactEmail = '';
        this.contactPhone = '';
    }
}