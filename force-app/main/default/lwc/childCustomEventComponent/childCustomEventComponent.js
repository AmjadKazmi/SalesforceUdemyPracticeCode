import { LightningElement } from 'lwc';

export default class ChildCustomEventComponent extends LightningElement {
    handleEvent(event) {
        const enteredValue = event.target.value;
        const customEventToDispatch = new CustomEvent('messagecustomevent', { detail: enteredValue,bubbles:true});
        this.dispatchEvent(customEventToDispatch);
    }

}