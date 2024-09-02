import Title from '@salesforce/schema/Contact.Title';
import { LightningElement } from 'lwc';

export default class ForEach extends LightningElement {
    contacts= [
        {
            id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering'
             
        },
        {
            id: 2,
            Name: 'Micheal Jones',
            Title: 'VP of Sales'

        },
        {
            id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO'
        },
        {
            id:4,
            Name:'Jennifer Anigston',
            Title:'VP of Marketing'
        },
        {
            id:5,
            Name:'Deepika Khanna',
            Title:'CTO'
        }
    ]
}