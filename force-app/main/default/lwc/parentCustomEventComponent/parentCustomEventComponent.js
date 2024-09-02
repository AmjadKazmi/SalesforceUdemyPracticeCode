import { LightningElement,track } from 'lwc';

export default class ParentCustomEventComponent extends LightningElement {

    constructor() {
        super();
        this.template.addEventListener('messagecustomevent', this.eventToHandle.bind(this));
    }
   @track childMessage;
    eventToHandle(event) {
        this.childMessage = event.detail;
    }
}