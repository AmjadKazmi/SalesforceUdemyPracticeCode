import { LightningElement, track} from 'lwc';

export default class SimpleInterestCalculator extends LightningElement {
    @track currentOutput;
    principal;
    rateOfInterest;
    noOfYears;

    handleInputChange(event) {
        const field = event.target.dataset.id;
        this[field] = event.target.value;
    }
    calculateSIHandler()
    {
        this.currentOutput='Simple Interest is : '+(this.principal*this.rateOfInterest*this.noOfYears)/100;
    }

}