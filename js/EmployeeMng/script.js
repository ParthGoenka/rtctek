const form = document.getElementById('employeeForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();  

    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const designation = document.getElementById('designation').value;
    const email = document.getElementById('email').value;
    const salary = document.getElementById('salary').value;

    const employeeData = { name, designation, email, salary, id };
    saveToLocalStorage(employeeData);

    saveToJSONServer(employeeData);

    window.location.href = "data.html";
});

function saveToLocalStorage(employeeData) {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employeeData);
    localStorage.setItem('employees', JSON.stringify(employees));
}

function saveToJSONServer(employeeData) {
    fetch('http://localhost:5000/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Employee data saved to JSON server:", data);
    })
    .catch(error => {
        console.error("Error saving data to JSON server:", error);
    });
}
