import { LightningElement, wire } from 'lwc';
import getAllContact from '@salesforce/apex/ContactManager.getContact';

export default class FetchContactViaApex extends LightningElement {
    @wire(getAllContact) contacts;

    get responseRecieved() {
        if (this.contacts) {
            return true;
        }
        return false;
    }
}