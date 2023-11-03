const data = require("../DAO/dao");

async function insertService(
  EmployeeID,
  FirstName,
  LastName,
  Email,
  AddressLine,
  City
) {
  return await data.insertData(
    EmployeeID,
    FirstName,
    LastName,
    Email,
    AddressLine,
    City
  );
}

async function getService(id) {
  return await data.getData(id);
}

async function getServiceEmail(Email) {
  return await data.getDataEmail(Email);
}

async function updateService(
  EmployeeID,
  FirstName,
  LastName,
  Email,
  AddressLine,
  City
) {
  return await data.updateUser(
    EmployeeID,
    FirstName,
    LastName,
    Email,
    AddressLine,
    City
  );
}

// updateService(43,'lokesh','khot','lokeshhgjug@gmail.com','wijahbkdj','hbf');

async function deleteService(id) {
  return await data.deleteFunction(id);
}

module.exports = { insertService, getService, updateService, deleteService,getServiceEmail };
