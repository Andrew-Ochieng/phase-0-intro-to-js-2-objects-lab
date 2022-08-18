// Write your solution in this file!

const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}

// employee function
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {
        ...employee, [key] : value
    }

    return newEmployee;

}


// destructivelyUpdateEmployeeWithKeyAndValue
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }


// deleteFromEmployeeByKey
function deleteFromEmployeeByKey(employee, key) {
    const nEmployee = { ...employee };
    delete nEmployee[key];
    return nEmployee;   
}


// destructivelyDeleteFromEmployeeByKey
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}





