import { LightningElement} from 'lwc';

export default class CreateAndViewEditForm extends LightningElement {
    recordId;
    show = false;
    
    createContact(event) {
        this.recordId = event.detail.id;
        this.show = true;
    }
}