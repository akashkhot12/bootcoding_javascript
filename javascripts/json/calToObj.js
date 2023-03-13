let array = '{ "employees" : [' +
' { "firstName":"John" , "lastName":"Doe", "technology":"Javascript" ,"sallary":"2500" , "experience":1  },' +
' { "firstName":"Anna" , "lastName":"Smith", "technology":"Javascript" ,"sallary":"3500" , "experience":3 },' +
' { "firstName":"Peter" , "lastName":"Jones", "technology":"Java" ,"sallary":"2500" , "experience":1 } ,' +
' { "firstName":"staint" , "lastName":"Jones", "technology":"Java" ,"sallary":"3500" , "experience":2 },' +
' { "firstName":"boston" , "lastName":"Jones", "technology":"Java" ,"sallary":"2500" , "experience":2 },' +
' { "firstName":"jack" , "lastName":"walge", "technology":"python" ,"sallary":"3500" , "experience":1 },' +
' { "firstName":"ria" , "lastName":"walter", "technology":"python" ,"sallary":"2500" , "experience":1 },' +
' { "firstName":"brock" , "lastName":"burg", "technology":"python" ,"sallary":"3500" , "experience":3 },' +
' { "firstName":"devid" , "lastName":"maika", "technology":"python" ,"sallary":"2500" , "experience":1},' +
' { "firstName":"jack" , "lastName":"watson", "technology":"react" ,"sallary":"3500" , "experience":2} ]}';

const stat = JSON.parse(array)
// console.log(stat);
// console.log(array);
getElementBySallary(stat,"2")


// find min to max static experience
function getElementBySallary(stat,experience) {
    stat.employees.forEach(element => {
        if(element.experience <= experience){
            console.log(element)
        }
    });
}