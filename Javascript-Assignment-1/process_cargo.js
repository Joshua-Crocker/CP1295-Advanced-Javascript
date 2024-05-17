$(document).ready(function() {
    let isFirstSubmission = true;
    let totalCargoWeight = 0;

    const createTable = () => {
        let table = document.createElement('table');
        table.id = 'dataTable';
        let tRow = document.createElement('tr');
        let tData1 = document.createElement('td');
        let tData2 = document.createElement('td');
        let tData3 = document.createElement('td');
        tData1.textContent = "Transport ID";
        tData2.textContent = "Description";
        tData3.textContent = "Cargo Weight";
        tRow.appendChild(tData1);
        tRow.appendChild(tData2);
        tRow.appendChild(tData3);
        table.appendChild(tRow);
        document.body.appendChild(table);
        let totalCargoWeightDisplay = document.createElement("p");
        totalCargoWeightDisplay.id = 'totalCargoWeightDisplay';
        document.body.appendChild(totalCargoWeightDisplay);
    };

    const appendDataToTable = (TransID, Desc, CargoWeight, table) => {
        let tRow = document.createElement('tr');
        let tData1 = document.createElement('td');
        let tData2 = document.createElement('td');
        let tData3 = document.createElement('td');
        tData1.textContent = TransID;
        tData2.textContent = Desc;
        tData3.textContent = CargoWeight;
        tRow.appendChild(tData1);
        tRow.appendChild(tData2);
        tRow.appendChild(tData3);
        table.appendChild(tRow);
    };

    const updateTotalWeight = (cargoWeight) => {
        let totalWeightInput = $("input[name='TotalWeight']");
        let emptyWeightInput = $("input[name='EmptyWeight']");
        let emptyWeight = parseInt(emptyWeightInput.val());
        let currentTotalWeight = parseInt(totalWeightInput.val());

        totalCargoWeight += parseInt(cargoWeight);
        let totalWeight = currentTotalWeight + parseInt(cargoWeight);
        
        $('#totalCargoWeightDisplay').text(`Total Cargo Weight: ${totalCargoWeight}`);
        if (isFirstSubmission) {
            totalWeight += emptyWeight;
            isFirstSubmission = false;
        }

        totalWeightInput.val(totalWeight);
    };

    createTable();

    $("#CargoForm").on("submit", function(event) {
        event.preventDefault(); 

        const transportID = $("#TransportID").val();
        const description = $("#Description").val();
        const cargoWeight = $("#CargoWeight").val();
        alert(transportID + ", " + description + ", " + cargoWeight);

        const tableElement = $("#dataTable")[0];
        appendDataToTable(transportID, description, cargoWeight, tableElement);

        updateTotalWeight(cargoWeight);

        $("#dataTable").show();
    });
});
