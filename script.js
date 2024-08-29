//Populate Table 1
function populateTable1(data) {
    const table1Body = document.querySelector('#table1 tbody');
    data.forEach(row => {
        const tr = document.createElement('tr');
        const tdIndex = document.createElement('td');
        const tdValue = document.createElement('td');

        tdIndex.textContent = row['Index #'];
        tdValue.textContent = row['Value'];

        tr.appendChild(tdIndex);
        tr.appendChild(tdValue);
        table1Body.appendChild(tr);
    });
}

//Populate Table 2
function populateTable2(data) {
    const valueMap = new Map(data.map(item => [item['Index #'], parseInt(item['Value'])]));

    const alphaValue = valueMap.get('A5') + valueMap.get('A20');
    const betaValue = Math.floor(valueMap.get('A15') / valueMap.get('A7'));
    const charlieValue = valueMap.get('A13') * valueMap.get('A12');

    document.getElementById('alpha').textContent = alphaValue;
    document.getElementById('beta').textContent = betaValue;
    document.getElementById('charlie').textContent = charlieValue;
}

// Parse CSV file to populate
Papa.parse("Table_Input.csv", {
    download: true,
    header: true,
    complete: function(results) {
        const data = results.data;
        populateTable1(data);
        populateTable2(data);
    }
});
