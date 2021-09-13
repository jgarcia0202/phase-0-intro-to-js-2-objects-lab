const employee = {
    name: "Sam",
    streetAddress: "123 Cypress"
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({},obj,{[key]:value});
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...obj, ...key};
    delete newEmployee[key]
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key]
    return obj;
}