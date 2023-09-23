import { LightningElement, api, track } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class ReactivePillContainer extends LightningElement {

    //Variables to be set from Flow.
    @api isCollapsible = false;
    @api isExpanded = false;
    @api label = '';
    @api singleLine = false;
    @api variant = 'standard';
    @api labelCounter = 0;

    @track _inputRecords = [];
    @track _selectedItemsRecords = [];
    @track _selectedItemsIds = [];
    @track _selectedItems = [];

    @api
    get inputRecords() {
        return this._selectedItems || [];
    }

    set inputRecords(records = []) {
        if (Array.isArray(records)) {
            this._inputRecords = records;
            this.dedupeSelectedItemRecords();
            this.updateSelectedItemIds();
            this.createSelectedItems();
        }
    }

    @api
    get selectedItemsRecords() {
        return this._selectedItemsRecords || [];
    }

    set selectedItemsRecords(records) {
        if (Array.isArray(records)) {
            this._selectedItemsRecords = records;
        }
    }

    @api
    get selectedItemsIds() {
        return this._selectedItemsIds || [];
    }

    set selectedItemsIds(ids) {
        if (ids) {
            this._selectedItemsIds = ids;
        }
    }

    //Counter to display total number of selected records. Label is customizable. 
    get selectedItemsCounter() {
        let counter = this._selectedItems.length;
        let label = this.labelCounter ? this.labelCounter : 'Item(s) Selected';
        return counter + ' ' + label;
    }

    //Remove Deselected Item
    handleItemRemove(event) {
        //Remove pill 
        const itemIndex = event.detail.index;
        this._selectedItems.splice(itemIndex, 1);

        //Remove from selected records
        const name = event.detail.item.name; //Item name is the record Id
        this._selectedItemsRecords = this._selectedItemsRecords.filter(record => record.Id !== name)
        console.log('selectedItemsRecords', this._selectedItemsRecords);
        this.dispatchFlowAttributeChangedEvent('selectedItemsRecords', this._selectedItemsRecords);

        //Remove from selected record Ids 
        this.updateSelectedItemIds();
    }

    //Filter Records Selected Multiple Times
    dedupeSelectedItemRecords() {
        let ids = new Set(this._selectedItemsRecords.map(r => r.Id));
        this._selectedItemsRecords = [...this._selectedItemsRecords, ...this._inputRecords.filter(r => !ids.has(r.Id))]; //'Extend' selectedItemRecords array without duplicates.
        console.log('dedupedSelectedItemsRecords', this._selectedItemsRecords);
        this.dispatchFlowAttributeChangedEvent('selectedItemsRecords', this._selectedItemsRecords);
    }

    //Update Selected Items Ids
    updateSelectedItemIds() {
        let ids = [];
        ids = this._selectedItemsRecords.map(d => d.Id);
        console.log('selectedItemIds', ids);
        this.dispatchFlowAttributeChangedEvent('selectedItemsIds', ids);
    }

    //Create Selected Items
    createSelectedItems() {
        let items = [];
        this._selectedItemsRecords.forEach(record => {
            if (record.Id && record.Name) {
                let item = { label: record.Name, name: record.Id };
                items.push(item);
            }
        });
        this._selectedItems = items;
    }

    dispatchFlowAttributeChangedEvent(attributeName, attributeValue) {
        const attributeChangeEvent = new FlowAttributeChangeEvent(
            attributeName,
            attributeValue
        );
        this.dispatchEvent(attributeChangeEvent);
    }
}