// Loading bellybutton biodiversity data into arrays
// Initialising arrays
let bellyButtonLink = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";
let testSubIDs = [];
let testSubMeta = [];
let OTUData = [];

// grabbing data from the json file
d3.json(bellyButtonLink).then(function(data) {
    console.log(data); // logging for debugging purposes
    // These can all be in the same for loop due to the array length
    // However, I have made individual loops incase the dataset changes
    for (let i = 0; i < data.names.length; i++) {
        testSubIDs.push(data.names[i]);
    };
    for (let i = 0; i < data.metadata.length; i++) {
        testSubMeta.push(data.metadata[i]);
    };
    for (let i = 0; i < data.samples.length; i++) {
        OTUData.push(data.samples[i]);
    };
});

// Creating traces for graphs
// trace1 = horizontal bar chart
let horBar = [{
    x: OTUData.map(x => x.samples.sample_values),
    y: testSubIDs.map(y => y.names),
    type: 'bar',
    orientation: 'h'
}];

// trace2 = bubble chart
let bubbleTrace = [{
    x: OTUData.map(x => x.samples.otu_ids),
    y: OTUData.map(y => y.samples.sample_values),
    text: OTUData.map(z => z.samples.otu_labels),
    mode: 'markers',
    marker: {
        size: OTUData.map(y => Object.y.samples.sample_values),
        color: OTUData.map(x => Object.x.samples.otu_ids),
    },
    type: 'scatter'
}];

// logging for debug purposes
console.log(testSubIDs);
console.log(testSubMeta);
console.log(OTUData.Object.samples.otu_ids);

