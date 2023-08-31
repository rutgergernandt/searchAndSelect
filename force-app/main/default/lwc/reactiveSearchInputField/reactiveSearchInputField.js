import { LightningElement, api, track } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class ReactiveSearchInputField extends LightningElement {

    @api label;
    @api placeholder;

    @track _input;

    @api
    set searchValue(input) {
        if (input) {
            this._input = input;
        }
    };
    get searchValue() {
        return this._input;
    }

    handleInputChange(event) {
        const attributeChangeEvent = new FlowAttributeChangeEvent('searchValue', event.target.value);
        this.dispatchEvent(attributeChangeEvent);
    }

}