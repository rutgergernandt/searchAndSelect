import { LightningElement, api, track } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class ReactiveSearchInputField extends LightningElement {

    //Variables to be set from Flow. 
    @api label;
    @api placeholder;

    //Searchfield input
    @track _input;

    //Get-Set pattern for reactivity 
    @api
    set searchValue(input) {
        if (input) {
            this._input = input;
        }
    };
    get searchValue() {
        return this._input;
    }

    //Handle every input change in the search field and fire Flow Change Event
    handleInputChange(event) {
        const attributeChangeEvent = new FlowAttributeChangeEvent('searchValue', event.target.value);
        this.dispatchEvent(attributeChangeEvent);
    }

}