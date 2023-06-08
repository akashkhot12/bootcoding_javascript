var observe = /** @class */ (function () {
    function observe(firstName, secondName, age) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
    }
    observe.prototype.getFirstName = function () {
        console.log("my first name is" + this.firstName);
    };
    return observe;
}());
var ob = new observe("akash", "khot", 25);
ob.getFirstName();
