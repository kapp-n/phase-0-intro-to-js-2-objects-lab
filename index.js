
const employee = {
    name : "Sam",
    streetAddress : undefined
  }
  

function updateEmployeeWithKeyAndValue(obj, key, value){
   const newObj = {...obj};
   newObj[key]=value;
   return newObj;
}

const newAddress = updateEmployeeWithKeyAndValue(employee, streetAdress, '11 Broadway');

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, "12 Broadway");


function deleteFromEmployeeByKey(employee,name,value){
    const newEmployee={...employee};
    newEmployee[name] = value;
    return newEmployee;
}
const newEmployee = deleteFromEmployeeByKey ('name', 'Sam');
delete[newEmployee.name];

    function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee[key];
        return employee;
    }
destructivelyDeleteFromEmployeeByKey(employee, 'name');
   
    