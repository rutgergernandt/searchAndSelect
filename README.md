# Search Input Field
<p>The new Reactive Screens feature of Salesforce Flow opens up all kinds of scenario's in which a search is executed to filter records.</p>
<p>For example the output of a text field can be leveraged in a formula which is used in the Salesforce Labs Data Fetcher component, which is displayed in a data table. 
But a text field is not a search field, therefore I created this very simple component that leverages the standard lightning-input component in the search variant and outputs the result reactively to flow. </p>

Not searching yet:
![Example 1](https://github.com/rutgergernandt/searchInputField/assets/48456874/95e971e6-00ca-4f00-8fae-df420324782a)

While searching:
![Example 2](https://github.com/rutgergernandt/searchInputField/assets/48456874/040451c7-4222-4b29-87a4-27a1dfec1b03)
