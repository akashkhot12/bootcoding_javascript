let array = '{ "employees" : [' +
' { "firstName":"John" , "lastName":"Doe", "technology":"Javascript" ,"sallary":"2500" , "experience":1  },' +
' { "firstName":"Anna" , "lastName":"Smith", "technology":"Javascript" ,"sallary":"3500" , "experience":3 },' +
' { "firstName":"Peter" , "lastName":"Jones", "technology":"Java" ,"sallary":"1500" , "experience":1 } ,' +
' { "firstName":"staint" , "lastName":"Jones", "technology":"Java" ,"sallary":"3500" , "experience":2 },' +
' { "firstName":"boston" , "lastName":"Jones", "technology":"Java" ,"sallary":"2500" , "experience":2 },' +
' { "firstName":"jack" , "lastName":"walge", "technology":"python" ,"sallary":"3000" , "experience":1 },' +
' { "firstName":"ria" , "lastName":"walter", "technology":"python" ,"sallary":"2500" , "experience":1 },' +
' { "firstName":"brock" , "lastName":"burg", "technology":"python" ,"sallary":"3500" , "experience":3 },' +
' { "firstName":"devid" , "lastName":"maika", "technology":"python" ,"sallary":"2500" , "experience":1.5},' +
' { "firstName":"jack" , "lastName":"watson", "technology":"react" ,"sallary":"3500" , "experience":2.5} ]}';

const stat = JSON.parse(array)
// console.log(stat);
// console.log(array);
// getElementByExperience(stat,"2");
// getElementByTechnology(stat,"python","Java","react")
getElementBySallary(stat,"1500","2500")


//find static experience
function getElementByExperience(stat,experience) {
    stat.employees.forEach(element => {
        if(element.experience <= experience ){
            console.log(element)
        }
    });
}

// print java or python 

function getElementByTechnology(stat,technology1,technology2,technology3) {
    stat.employees.forEach(element => {
        if(element.technology == technology1 || element.technology==technology2 || element.technology==technology3){
            console.log(element)
        }
    });
}


// print sallary in range

function getElementBySallary(stat,sallary1,sallary2){
    stat.employees.forEach(element =>{
        if(element.sallary <= sallary1 || element.sallary >= sallary2){
            console.log(element);
        }
    })
}
