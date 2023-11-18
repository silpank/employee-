let username = localStorage.getItem('USERNAME')
console.log(username);
head1.innerHTML = `Welcome ${username}`

function addDetails() {
    var employeeDetails = {
        id: employeeId.value,
        name: employeeName.value,
        address: employeeAddress.value,
        designation: employeeDesignation.value,
        experience: employeeExperience.value,
        salary: employeeSalary.value
    }
    if (employeeDetails.id == "" || employeeDetails.name == "" || employeeDetails.address == "" || employeeDetails.designation == "" ||
        employeeDetails.experience == "" || employeeDetails.salary == "") {
        alert('Please fill the form')
    } else {
        if (employeeDetails.id in localStorage) {
            alert('Employee already exsited ')
        } else {
            localStorage.setItem(employeeDetails.id, JSON.stringify(employeeDetails))
            alert('Employee details add successfully')
        }
    }
}

function retrieveDetails() {
    let key = a.value
    let employee = JSON.parse(localStorage.getItem(key))
    console.log(employee);

    if (employee) {
        result.innerHTML = `<div class="card" style="width: 18rem;">
  
    <div class="card-body">
      <h5 class="card-title">Employee Details</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee Id :${employee.id}</li>
      <li class="list-group-item">Employee Name :${employee.name}</li>
      <li class="list-group-item">Employee Address :${employee.address}</li>
      <li class="list-group-item">Employee Designation :${employee.designation}</li>
      <li class="list-group-item">Employee Experience :${employee.experience}</li>
      <li class="list-group-item">Employee Salary :${employee.salary}</li>
    </ul>
  </div>`;
    } else {
        console.log("Employee not found");
        result.innerHTML = ''; 
        alert('Employee details are not there')
    }
}

function logout() {
    localStorage.clear()
    window.location = './index.html'
}