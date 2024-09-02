import { api, LightningElement } from 'lwc';

export default class EmployeeDetails extends LightningElement {
    @api empDetails={empName: 'Amjad',address:'UP'}
}