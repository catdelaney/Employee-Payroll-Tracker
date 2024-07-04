// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employees = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let addEmployees = true;

  while (addEmployees) {
    let firstName = prompt("Enter the employee's first name.");
    let lastName = prompt("Enter the employee's last name");
    let salary = prompt("Enter the employee's salary amount");

    while (isNaN(salary) || salary <=0) {
      alert("Please insure the entered employee salary is a positive number.");
      salary = prompt("Enter the employee's salary amount");
    }

    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: Number(salary) || 0
    };

    employees.push(employee);
    addEmployees = confirm("Would you like to add a new employee?");
  }
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0
  for (let employee of employeesArray) {
    totalSalary += employee.salary;
  }

  let employeeCount = (employeesArray.length || 1);
  let salaryAverage = totalSalary / employeeCount;
  console.log("The average salary of our " + employeeCount + " employees is: " + salaryAverage.toLocaleString("en-US", {style: "currency", currency: "USD"}));
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomIndex];

  console.log("Congratulations to " + randomEmployee.firstName + " " + randomEmployee.lastName + ", our random draw winner!");
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
