const editModal = document.getElementById('exampleModalCenter')
const editForm = document.querySelector('#add')


let idCounter = 2;

editForm.addEventListener('click', function () { 
    // Get input values 
    let name = 
        document.getElementById("exampleInputEmail1").value; 
    let mobile = 
        document.getElementById("exampleInputPassword1").value; 
    
    // Get the table and insert a new row at the end 
    let table = document.getElementById("outputTable"); 
    let newRow = table.insertRow(table.rows.length);

    // Insert data into cells of the new row 
    newRow.insertCell(0).innerHTML = `<th scope="row">${idCounter++}</th>`
    newRow.insertCell(1).innerHTML = name; 
    newRow.insertCell(2).innerHTML = mobile; 
    newRow.insertCell(3).innerHTML = '<td><img id="PenImg" class="img" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" src="images/icons8-pen-64.png" width="20"></td>'
    
    // Clear input fields 
    clearInputs(); 
})



function clearInputs() { 
    document.getElementById("exampleInputEmail1").value = ""; 
    document.getElementById("exampleInputPassword1").value = ""; 
}


function editData(button) { 
            
    // Get the parent row of the clicked button 
    let row = button.parentNode.parentNode; 
    
    // Get the cells within the row 
    let fullName = row.cells[1]; 
    let mobileCell = row.cells[2]; 
    
    // Prompt the user to enter updated values 
    let name = document.getElementById("exampleInputEmail1").value; 
    let mobile = document.getElementById("exampleInputPassword1").value; 

    
    // Update the cell contents with the new values
    fullName.innerHTML = name; 
    mobileCell.innerHTML = mobile; 
} 
