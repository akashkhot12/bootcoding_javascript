let data = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
  ];
  
  // CREATE
  function createRecord(id, name) {
    data.push({ id, name });
  }
  
  // READ
  function getRecordById(id) {
    return data.find(record => record.id === id);
  }
  
  function getAllRecords() {
    return data;
  }
  
  // UPDATE
  function updateRecord(id, newName) {
    const record = getRecordById(id);
    if (record) {
      record.name = newName;
      return true;
    }
    return false;
  }
  
  // DELETE
  function deleteRecord(id) {
    const index = data.findIndex(record => record.id === id);
    if (index !== -1) {
      data.splice(index, 1);
      return true;
    }
    return false;
  }
  
  // Example usage
  createRecord(4, "Alice");
  console.log(getAllRecords());
  
  updateRecord(2, "Janet");
  console.log(getAllRecords());
  
  deleteRecord(3);
  console.log(getAllRecords());
  