
const employeesFromLocalStorage = JSON.parse(localStorage.getItem('employees')) || [];
const employeeListDiv = document.getElementById('employeeList');

async function removeEmp(id){
    console.log(id);
    const emp = await fetch(`http://localhost:5000/employees/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(employeeListDiv)
        })
        .then(res => res.json())
        .then(/*json => displayData(json)console.log("deleted")*/window. location. reload())
       .catch(e => console.log(e));

}

fetch('http://localhost:5000/employees')
    .then(response => response.json())
    .then(data => {
        data.forEach(employee => {
            const employeeDiv = document.createElement('div');
            employeeDiv.classList.add('employee');

            employeeDiv.innerHTML = `
                <p>Name: ${employee.name}</p>
                <p>Employee id: ${employee.id}</p>
                <p>Designation: ${employee.designation}</p>
                <p>Email: ${employee.email}</p>
                <p>Salary: ${employee.salary}</p>
                <span class="bg-red-500 hover:bg-green-400 text-white px-2 rounded" onclick="removeEmp(${employee.id})">Delete</span>
                <hr>
            `;

            employeeListDiv.appendChild(employeeDiv);
        });
    })
    .catch(error => {
        console.error("Error :", error);
    });
