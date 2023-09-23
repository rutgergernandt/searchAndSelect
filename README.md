# Search Input Field
<p>The new Reactive Screens feature of Salesforce Flow opens up all kinds of scenario's in which a search is executed to filter records.</p>
<p>For example the output of a text field can be leveraged in a formula which is used in the Salesforce Labs Data Fetcher component, which is displayed in a data table. 
But a text field is not a search field, therefore I created this very simple component that leverages the standard lightning-input component in the search variant and outputs the result reactively to flow. </p>

Not searching yet:
![Example 1](https://github.com/rutgergernandt/searchInputField/assets/48456874/95e971e6-00ca-4f00-8fae-df420324782a)

While searching:
![Example 2](https://github.com/rutgergernandt/searchInputField/assets/48456874/040451c7-4222-4b29-87a4-27a1dfec1b03)

# Search Input Field
<p>Newly added to the repositry is a pill box to display selected records. Thereby the rerendering of the table upon searching won't deselect the records selected in a previous search.</p>

<p>It displays the pills of records selected in the table, which can also be deselected/removed. It passes back to flow both the original records as well as an array of ids, for use downwards to create records etc.</p>
<p>
It is fully reactive. Thus you can rewire the record output of the component also to the preselected records input of the table, which results in a record deselected as pill also being deselected in the table (only standard component, not in the unofficial one unfortunately). In dedupes selections nonetheless too, which is convenient when it is used with a search effort that rerenders the component. 
</p>

Displaying some records: 
![Example 3](https://github.com/rutgergernandt/searchAndSelect/assets/48456874/8bae5ff9-8107-4ffb-b4cc-acca88d34e58)


