import { LightningElement,track } from 'lwc';

export default class EmployeeInfo extends LightningElement {
    @track name = '';
    @track age = '';
    @track salary = '';
    @track show = true;

    handleInputChange(event) {
        const field = event.target.dataset.id;
        this[field] = event.target.value;
    }

    saveButtonHandler() {
        // Handle save logic
        this.show = false;
    }
}