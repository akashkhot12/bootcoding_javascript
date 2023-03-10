console.log('name: ', name);
console.log('handle: ',handle);
console.log('getUser: ',getUser);

var name = 'akash'
var handle = '@akashkhot';


function getUser() {
    return{
        name: name,
        handle: handle
    }
}

console.log(getUser("Akash","khit@gb"))
