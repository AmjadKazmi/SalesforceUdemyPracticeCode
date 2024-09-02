import { LightningElement } from 'lwc';
import getContactListBasisOfInput from '@salesforce/apex/ContactManager.getContactUsingParams';

export default class FetchContactViaApexPassingParams extends LightningElement {
    numberOfRecord;
    contacts;
    
    inputHandler(event) {
        this.numberOfRecord = event.target.value;      
    }
    
    getContact() {
        getContactListBasisOfInput({ numberOfRecords: this.numberOfRecord }).then(response => {
            this.contacts = response;
        }).catch(error => {
            console.log('Error in fetching response ' + error.body.message);
        })
    }

    get responseRecieved() {
        if (this.contacts) {
            return true;
        }
        return false;
    }


}